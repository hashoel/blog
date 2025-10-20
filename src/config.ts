export const SITE = {
  website: "https://blog.hashoel.org/", // replace this with your deployed domain
  author: "Hashoel",
  profile: "https://blog.hashoel.org/about/",
  desc: "השואל - כאן שואלים הכל, ובכיף",
  title: "השואל",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "rtl", // "rtl" | "auto"
  lang: "he", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jerusalem",
} as const;
