---
author: Alberto Perdomo
pubDatetime: 2024-09-08T20:58:52.737Z
modDatetime: 2025-03-22T09:25:46.734Z
title: איך להוסיף נוסחאות LaTeX בפוסטים של Astro
tags:
  - תיעוד
description: שימוש ב‑KaTeX ו‑remark/rehype להצגת נוסחאות מתמטיות בבלוג.
---

מדריך זה מציג כיצד לרנדר נוסחאות LaTeX בקבצי Markdown של AstroPaper באמצעות הפלאגינים המתאימים.

## תוכן העניינים

## הוראות התקנה

1. התקן חבילות:

   ```bash
   pnpm install rehype-katex remark-math katex
   ```

2. הוסף לפונפיגורציית Astro את הפלאגינים `remarkMath` ו‑`rehypeKatex`.

   ```ts file=astro.config.ts
   // ...
   import remarkMath from "remark-math";
   import rehypeKatex from "rehype-katex";

   export default defineConfig({
     // ...
     markdown: {
       remarkPlugins: [
         remarkMath, // [!code ++]
         remarkToc,
         [remarkCollapse, { test: "Table of contents" }],
       ],
       rehypePlugins: [rehypeKatex], // [!code ++]
       shikiConfig: {
         // For more themes, visit https://shiki.style/themes
         themes: { light: "min-light", dark: "night-owl" },
         wrap: false,
       },
     },
     // ...
   });
   ```

3. הטמע את ה‑CSS של KaTeX ב‑Layout הראשי.

   ```astro file=src/layouts/Layout.astro
   ---
   import { SITE } from "@config";

   // astro code
   ---

   <!doctype html>
   <!-- others... -->
   <script is:inline src="/toggle-theme.js"></script>

   <!-- [!code highlight:4] -->
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
   />

   <body>
     <slot />
   </body>
   ```

4. הוסף צבע טקסט ל‑`.katex-display` ב‑`typography.css`.

   ```css file=src/styles/typography.css
   @plugin '@tailwindcss/typography';

   @layer base {
     /* other classes */

     /* Katex text color */
     /* [!code highlight:3] */
     .prose .katex-display {
       @apply text-foreground;
     }

     /* ===== Code Blocks & Syntax Highlighting ===== */
     /* other classes */
   }
   ```

## שימוש בנוסחאות

נוסחה Inline בין `$...$` למשל: `$E = mc^2$`.
נוסחת בלוק בין `$$...$$`.

דוגמה:

```latex
$$ \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$
```

סמלים נפוצים: `$\alpha$`, `$\sum$`, `$\int$`, `$\forall$`.

כך ניתן להוסיף מתמטיקה קריאה וברורה לכל פוסט טכני.
