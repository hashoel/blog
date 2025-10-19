---
author: Sat Naing
pubDatetime: 2022-09-23T04:58:53Z
modDatetime: 2025-03-20T03:15:57.792Z
title: איך להגדיר ולהתאים את תבנית AstroPaper
slug: how-to-configure-astropaper-theme
featured: true
draft: false
tags:
  - הגדרות
  - תיעוד
description: מדריך להתאמה אישית של התבנית כך שתהיה לגמרי שלך.
---

AstroPaper ניתנת להתאמה מלאה. רוב ההגדרות חיות בקובץ `src/config.ts` בתוך האובייקט `SITE`.

## תוכן העניינים

## הגדרות SITE מרכזיות

שדה `website` חשוב בפרודקשן ל‑URL קנוני ותמונות שיתוף. שדות נוספים: `author`, `desc`, `title`, `ogImage`, מספר פוסטים בעמוד, הפעלת ארכיון, כפתור חזור, עריכת פוסט, יצירת OG דינמית, כיוון טקסט ושפת המסמך.

| אפשרות | תיאור |
| ------ | ----- |
| website | כתובת האתר המשוגר |
| author | שם המחבר |
| desc | תיאור האתר (SEO) |
| ogImage | תמונת OG ברירת מחדל |
| postPerIndex | כמה פוסטים בקטע "פוסטים אחרונים" בעמוד הבית |
| postPerPage | פוסטים בעמוד ברשימת הפוסטים |
| showArchives | הצגת עמוד הארכיון |
| showBackButton | כפתור חזרה בפוסטים |
| editPost | קישור עריכה לכל פוסט |
| dynamicOgImage | יצירת תמונת OG דינמית אם חסרה |
| dir / lang | כיוון ושפת ה‑HTML |
| timezone | אזור זמן לברירת מחדל |

## רוחב פריסה

עדכון המחלקה Tailwind `max-w-app` ב‑`global.css` משנה את רוחב התוכן. אפשר להרחיב ל‑`max-w-4xl` וכד'.

## לוגו או טקסט

ניתן להחליף את `{SITE.title}` בלוגו SVG או בתמונה דרך `Header.astro` ע"י ייבוא הקובץ ושימוש בו בתוך `<a>`.

## קישורים חברתיים ושיתוף

מוגדרים ב‑`constants.ts` במערכים `SOCIALS` ו‑`SHARE_LINKS`.

התאמות נוספות אפשר לבצע ישירות בקומפוננטים ו‑CSS.
