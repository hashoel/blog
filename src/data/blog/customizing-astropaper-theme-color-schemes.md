---
author: Sat Naing
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2025-06-13T16:46:34.155Z
title: התאמה אישית של סכמות צבע ב‑AstroPaper
featured: false
draft: false
tags:
  - סכמות-צבע
  - תיעוד
description: איך להפעיל/לכבות מצב בהיר וכהה ולהתאים סכמות צבע בתבנית AstroPaper.
---

הפוסט הזה מסביר איך להפעיל או לכבות מצב בהיר וכהה באתר, וכיצד להתאים את סכמות הצבע של כל האתר.

## תוכן העניינים

## הפעלה/כיבוי מצב בהיר וכהה

התבנית כוללת כברירת מחדל מצב בהיר וכהה (שתי סכמות צבע). ניתן לכבות זאת בקובץ ההגדרות `SITE`.

```js file="src/config.ts"
lightAndDarkMode: true // הפוך ל-false כדי לכבות
```

## בחירת סכמה ראשית

אם מכבים מצב בהיר/כהה, צבעי המערכת (prefers-color-scheme) ישתלטו. כדי לכפות סכמה ראשית, ערוך את המשתנה `primaryColorScheme` ב‑`public/toggle-theme.js` לערך `"light"` או `"dark"`.

## התאמת סכמות צבע

שני מצבי הצבע מוגדרים ב‑`global.css` תחת הסלקטורים `:root, html[data-theme="light"]` (לבהיר) ו‑`html[data-theme="dark"]` (לכהה). עדכן את הערכים של המשתנים (`--background`, `--foreground`, וכו').

טבלת משתנים:

| משתנה | שימוש |
| ------ | ----- |
| --background | צבע רקע ראשי |
| --foreground | צבע טקסט ראשי |
| --accent | צבע דגש (קישורים, Hover) |
| --muted | רקע עדין לאזורים משניים |
| --border | צבע גבולות וקווים |

דוגמה לשינוי מצב בהיר:

```css
:root, html[data-theme="light"] {
  --background: #f6eee1;
  --foreground: #012c56;
  --accent: #e14a39;
  --muted: #efd8b0;
  --border: #dc9891;
}
```

לסכמות מוכנות נוספות ראה הפוסט על סכמות צבע מוגדרות מראש.
