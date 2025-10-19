עדכון תלויות חשוב לביטחון ולפיצ'רים חדשים. כלי מומלץ: `npm-check-updates` (ncu).
pubDatetime: 2023-07-20T15:33:05.569Z
## תוכן העניינים
featured: false
## שלבים כלליים
ogImage: ../../assets/images/forrest-gump-quote.png
1. התקנה גלובלית: `npm install -g npm-check-updates`
2. בדיקה: `ncu`
3. עדכון גרסאות patch: `ncu -u --target patch`
4. עדכון גרסאות minor: `ncu -i --target minor`
5. בדיקת major והתאמות ידניות: `ncu -i`
  - שאלות-נפוצות
קרא תמיד Release Notes עבור שדרוגים גדולים.
## Table of contents
## עדכון תבנית AstroPaper
## Updating Package Dependencies
אם משתמשים בתבנית כבסיס: ניתן להוסיף רימוט מקורי ולמשוך שינויים:
In most cases, the files and directories you might not want to override (as you've likely updated those files) are `src/content/blog/`, `src/config.ts`, `src/pages/about.md`, and other assets & styles like `public/` and `src/styles/base.css`.

If you’re someone who only updates the bare minimum of the template, it should be okay to replace everything with the latest AstroPaper except the above files and directories. It’s like pure Android OS and other vendor-specific OSes like OneUI. The less you modify the base, the less you have to update.
**IMPORTANT!!!**
```bash
git checkout -b build/update-astro-paper
```
פתור קונפליקטים, בדוק שהכל עובד ואז מיזוג לענף הראשי.
If you face `fatal: refusing to merge unrelated histories` error, you can resolve that by running the following command
## קבצים לשימור
```bash
שמור בדרך כלל על: תוכן הפוסטים (`src/data/blog/`), `src/config.ts`, `about.md`, ומשאבים מותאמים אישית.
```
## סיכום
After running the above command, you’re likely to encounter conflicts in your project. You'll need to resolve these conflicts manually and make the necessary adjustments according to your needs.
פעולה שוטפת של עדכון תלויות משפרת אבטחה ויציבות ומקטינה חובות טכניים עתידיים.

Once you're satisfied with the result, it's time to merge the update branch into your main branch (only if you are updating the template in another branch). Congratulations! You've successfully updated your template to the latest version. Your blog is now up-to-date and ready to shine! 🎉

## Conclusion

In this article, I've shared some of my insights and processes for updating dependencies and the AstroPaper template. I genuinely hope this article proves valuable and assists you in managing your projects more efficiently.

If you have any alternative or improved approaches for updating dependencies/AstroPaper, I would love to hear from you. Thus, don't hesitate to start a discussion in the repository, email me, or open an issue. Your input and ideas are highly appreciated!

Please understand that my schedule is quite busy these days, and I may not be able to respond quickly. However, I promise to get back to you as soon as possible. 😬

Thank you for taking the time to read this article, and I wish you all the best with your projects!
