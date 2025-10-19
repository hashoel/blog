---
author: FjellOverflow
pubDatetime: 2024-07-25T11:11:53Z
modDatetime: 2025-03-12T12:28:53Z
title: שילוב תגובות Giscus ב‑AstroPaper
slug: how-to-integrate-giscus-comments
featured: false
draft: false
tags:
  - astro
  - בלוג
  - תיעוד
description: הוספת מערכת תגובות מבוססת GitHub Discussions לבלוג סטטי.
---

Giscus מאפשר להציג ולהוסיף תגובות בפלטפורמת GitHub Discussions גם באתר סטטי כמו זה.

## תוכן העניינים

## איך זה עובד

הספרייה טוענת דיונים דרך API של GitHub. סקריפט לקוח מוטמע בעמוד יוצר טופס תגובה וקורא את השרשור המתאים לפי `pathname`.

דרישות:
- ריפו ציבורי
- התקנת אפליקציית Giscus
- הפעלת Discussions בריפו

## הטמעה בסיסית

הדבק תג `<script>` שנוצר ב‑giscus.app בתוך `PostDetails.astro` מתחת לכפתורי השיתוף.

## קומפוננטת React עם תמיכה במצב כהה/בהיר

ניתן להשתמש בחבילה `@giscus/react` ולהחליף ערכת צבע לפי מצב האתר. האירועים מאזינים לכפתור החלפת ערכת צבע ול‑prefers-color-scheme.

## סיכום

כך ניתן להוסיף תגובות אינטראקטיביות בלי שרת ייעודי, הנשמרות ב‑GitHub ומוטענות דינמית.
