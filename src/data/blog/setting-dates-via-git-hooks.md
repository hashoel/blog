---
author: Simon Smale
pubDatetime: 2024-01-03T20:40:08Z
modDatetime: 2024-01-08T18:59:05Z
title: שימוש ב‑Git Hooks לקביעת תאריכי יצירה ועדכון
featured: false
draft: false
tags:
  - תיעוד
  - שאלות-נפוצות
canonicalURL: https://smale.codes/posts/setting-dates-via-git-hooks/
description: אוטומציה של השדות pubDatetime ו‑modDatetime בפרונטמאטר באמצעות Git Hooks.
---

פוסט זה מסביר איך להשתמש ב‑hook מסוג `pre-commit` כדי לעדכן אוטומטית את תאריכי יצירת/עדכון הפוסט בפרונטמאטר של AstroPaper.

## תוכן העניינים

## רעיון כללי

Git Hooks מאפשרים להריץ סקריפטים בזמן פעולות Git. כאן נשתמש ב‑`pre-commit` כדי:
- להוסיף `pubDatetime` לקבצים חדשים
- לעדכן `modDatetime` בקבצים ששונו (רק אם אינם טיוטה)

## דוגמה לסקריפט (מקוצר)

```bash
# עדכון modDatetime בקבצים ששונו
git diff --cached --name-status | grep -i '^M.*\.md$' | while read _ file; do
  draft=$(awk -v RS='---' 'NR==2{print}' "$file" | awk '/^draft: /{print $2}')
  if [ "$draft" = "false" ]; then
    sed -i "s/^modDatetime:.*/modDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" "$file"
    git add "$file"
  fi
done
```

לקבצים חדשים:

```bash
git diff --cached --name-status | grep -i '^A.*\.md$' | while read _ file; do
  sed -i "s/^pubDatetime:.*/pubDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" "$file"
  git add "$file"
done
```

## הערות נוספות

לעיתים צריך לאפשר ערך ריק ל‑`modDatetime` ולהגדירו כ‑nullable בסכמת התוכן. התאמות קלות נדרשות בקומפוננטים שמקבלים את הערך.

## סיכום

באמצעות Git Hooks ניתן להבטיח עקביות בשדות זמן ללא עריכה ידנית בכל פוסט.
