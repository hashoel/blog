---
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: הוספת פוסטים חדשים בתבנית AstroPaper
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: true
tags:
  - תיעוד
description: כמה כללים והמלצות ליצירת או הוספת פוסטים חדשים באמצעות תבנית AstroPaper.
---

להלן כללים/המלצות, טיפים וטריקים ליצירת פוסטים חדשים בתבנית הבלוג AstroPaper.

<figure>
  <img
    src="https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="שולחן עץ קלאסי עם כלי כתיבה, שעון וינטג' ותיק עור"
  />
  <figcaption class="text-center">
    צילום: <a href="https://www.pexels.com/photo/brown-wooden-desk-159618/">Pixabay</a>
  </figcaption>
</figure>

## תוכן העניינים

## יצירת פוסט בלוג

כדי לכתוב פוסט חדש, צור קובץ Markdown בתוך הספרייה `src/data/blog/`.

> לפני גרסה 5.1.0 של AstroPaper כל הפוסטים היו חייבים להיות ישירות בתוך `src/data/blog/` בלי תיקיות משנה.

החל מגרסה 5.1.0 ניתן לארגן פוסטים בתיקיות משנה כדי להקל על הניהול.

למשל, אם תרצה לקבץ פוסטים תחת `2025` תוכל לשים אותם ב‑`src/data/blog/2025/`. זה גם משפיע על כתובת ה‑URL: הקובץ `src/data/blog/2025/example-post.md` יהיה זמין ב‑`/posts/2025/example-post`.

אם אינך רוצה שתיקיית משנה תשפיע על ה‑URL, הוסף בתחילת שם התיקייה קו תחתון `_`.

```bash
src/data/blog/very-first-post.md          -> mysite.com/posts/very-first-post
src/data/blog/2025/example-post.md        -> mysite.com/posts/2025/example-post
src/data/blog/_2026/another-post.md       -> mysite.com/posts/another-post
src/data/blog/docs/_legacy/how-to.md      -> mysite.com/posts/docs/how-to
src/data/blog/Example Dir/Dummy Post.md   -> mysite.com/posts/example-dir/dummy-post
```

> 💡 טיפ: אפשר גם להגדיר `slug` ידני בפרונטמאטר. ראה סעיף הבא.

אם נתיב תיקיית המשנה לא מופיע בפלט הבנייה, מחק `node_modules`, התקן מחדש והרץ בנייה.

## Frontmatter

Frontmatter הוא המקום לשמור מידע חשוב על הפוסט. הוא כתוב בראש הקובץ בפורמט YAML. קרא עוד בתיעוד Astro.

רשימת השדות:

| מאפיין | תיאור | הערה |
| ------ | ------ | ----- |
| title | כותרת הפוסט (h1) | חובה |
| description | תיאור/תקציר הפוסט | חובה |
| pubDatetime | זמן הפרסום בפורמט ISO 8601 | חובה |
| modDatetime | זמן עדכון אחרון (להוסיף רק אם עודכן) | רשות |
| author | מחבר הפוסט | ברירת מחדל = SITE.author |
| slug | מזהה ייחודי ל‑URL | ברירת מחדל = שם הקובץ מעובד |
| featured | האם להציג במדור "מומלצים" | ברירת מחדל false |
| draft | סימון כטיוטה (לא מפורסם) | ברירת מחדל false |
| tags | תגיות (מילות מפתח) | ברירת מחדל others |
| ogImage | תמונת OG לשיתוף ורשתות | ברירת מחדל SITE.ogImage או דינמית |
| canonicalURL | כתובת קנונית (מוחלטת) אם קיים מקור נוסף | ברירת מחדל Astro.site + הנתיב |
| hideEditPost | הסתרת כפתור העריכה בפוסט | ברירת מחדל false |
| timezone | אזור זמן ספציפי לפוסט | ברירת מחדל SITE.timezone |

> טיפ: ניתן לקבל זמן ISO ע"י `new Date().toISOString()` בקונסול.

רק title, description ו‑pubDatetime חובה.

`slug` חייב להיות ייחודי. אם לא מוגדר, יווצר אוטומטית משם הקובץ.

אם לא מציינים תגיות, תתווסף תגית ברירת מחדל `others` (ניתן לשינוי ב‑`content.config.ts`).

### דוגמת Frontmatter

```yaml
---
title: הכותרת של הפוסט
author: שמך
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ../../assets/images/example.png
description: תיאור לדוגמה של פוסט לדוגמה.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## הוספת תוכן עניינים

כדי שיופיע תוכן עניינים, כתוב כותרת h2 בשם `Table of contents` במיקום הרצוי.

## כותרות

הכותרת הראשית של הפוסט מגיעה מה‑title ב‑frontmatter, לכן בתוך התוכן השתמש בכותרות h2–h6.

## הדגשת תחביר

AstroPaper משתמש ב‑Shiki כברירת מחדל. ניתן להסיר טרנספורמרים אם לא נדרש.

## תמונות

שתי דרכים: בתוך `src/assets/` (מומלץ, אופטימיזציה אוטומטית) או בתוך `public` (לא אופטימיזציה).

## דחיסת תמונות

השתמש ב‑TinyPNG / TinyJPG לפני העלאה כדי לשפר ביצועים.

## תמונת OG

תמונת ברירת המחדל תוצג אם לא צוין אחרת. מומלץ 1200x640.
