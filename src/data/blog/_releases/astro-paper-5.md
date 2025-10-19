---
pubDatetime: 2025-03-08T08:18:19.693Z
title: AstroPaper 5.0
slug: astro-paper-v5
featured: true
ogImage: ../../../assets/images/AstroPaper-v5.png
tags:
  - גרסה
description: גרסה 5: אותו מראה נקי, עדכונים פנימיים משמעותיים.
---

AstroPaper v5 כאן – שומרת על מינימליזם אך מעדכנת את התשתית.

![AstroPaper v5](@/assets/images/AstroPaper-v5.png)

## תוכן העניינים

## שינויים מרכזיים

### שדרוג ל‑Astro v5

אימוץ הפיצ'רים החדשים והביצועים המשופרים.

### Tailwind v4

הגדרות ב‑`global.css`; טיפוגרפיה ב‑`typography.css`. הפחתת CSS פנימי ברכיבים.

פלטת צבע מצומצמת ל‑5 משתנים (בהיר/כהה) כמוגדר בקונפיג.

### מעבר לחיפוש Pagefind

הסרת React + Fuse.js. Pagefind מאנדקס את כל התוכן ולא רק כותרות ותיאורים.

### שינוי אליאס יבוא

ייבוא עכשיו עם `@/` (למשל `@/utils/slugify`).

### מעבר ל‑pnpm

ניהול חבילות מהיר ויעיל יותר.

### רכיב SVG ניסיוני

שימוש ב‑Astro SVG Component במקום inline SVG.

### הפרדת קונפיג וקבועים

`config.ts` מכיל רק SITE; קבועים עברו ל‑`constants.ts`.

## שינויים נוספים

- ספריית הפוסטים: `src/data/blog/`
- קובץ סכמות חדש: `content.config.ts`
- עדכון תלויות
- הסרת גופן IBM Plex Mono
- לוגיקת כפתור "חזרה" משתמשת ב‑session
- התאמות סגנון קטנות

## סיכום

אותו עיצוב נקי, תשתית מודרנית יותר. אם נהנית מהתבנית – כוכב, חסות או קפה תמיד יתקבלו בברכה. תודה!
