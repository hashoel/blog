---
title: תוסף הטיפוגרפיה של Tailwind
author: Sat Naing
pubDatetime: 2022-07-05T02:05:51Z
featured: false
draft: false
tags:
  - TypeScript
  - Astro
description: פוסט לדוגמה: שימוש יעיל ב‑@tailwindcss/typography.
---

> מקור: [TailwindLabs](https://tailwindcss-typography.vercel.app/). מובא כאן כדוגמה לשילוב תוכן בתבנית.

ברירת המחדל של Tailwind מסירה עיצוב דפדפן מובנה מכותרות, פסקאות ורשימות. זה טוב ל‑UI של אפליקציות, אך בתוכן עשיר (Markdown/CMS) נדרש עיצוב טיפוגרפי נעים.

התוסף `@tailwindcss/typography` מוסיף מחלקה `prose` שמעצבת בלוק HTML פשוט למסמך קריא.

```html
<article class="prose">
  <h1>כותרת לדוגמה</h1>
  <p>תוכן פסקה ראשונה...</p>
</article>
```

## למה זה חשוב

- הכל נראה טוב כברירת מחדל.
- חוסך זמן וכפילויות.

## דוגמה לרכיבים טיפוגרפיים

**טקסט מודגש**, *טקסט נטוי*, רשימות, ציטוטים, בלוקי קוד וכו'.

### כותרות
כותרות עוקבות צריכות יותר/פחות רווח בהתאם להקשר.

### רשימות
רשימות מקוננות נוטות להכביד – עדיף לשמור על עומק נמוך.

### תמונות
<figure>
  <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80" alt="" />
  <figcaption>דוגמת כיתוב לתמונה.</figcaption>
</figure>

### קוד
```js
module.exports = {
  theme: { extend: {} },
  plugins: [],
};
```

### טבלאות
| כותרת | ערך |
| ------ | ---- |
| A | 1 |
| B | 2 |

### טקסט inline
`<span>` או `@tailwindcss/typography` בתוך משפט.

## סיכום
התוסף מספק טיפוגרפיה איכותית מיידית בלי לגעת בסגנונות בסיסיים גלובליים.
