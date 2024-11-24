import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderSlot, f as renderHead } from './astro/server_BDxqZOi7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const settings = {
  title: `Bobbin`,
  description: `Bobbin is the all-in-one app to help you plan, organize, and finish your sewing projects.`,
  url: `https://bobbin.app`, // No trailing slash!
  // JSON LD
  name: `Bobbin.app`,
  // Twitter URL
  twitterURL: `https://x.com/bobbinapp`
};

const $$Astro$1 = createAstro("https://bobbin.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "./opengraph.jpg", Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><!-- Primary Meta Tags --><title>${title || settings.title}</title><meta name="title"${addAttribute(title || settings.title, "content")}><meta name="description"${addAttribute(description || settings.description, "content")}><!-- settingsmap --><link rel="settingsmap" href="/settingsmap.xml"><!-- RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(`${settings.name} Blog`, "title")}${addAttribute(`${settings.url}/feed/blog.xml`, "href")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" type="text/css"></noscript>`;
}, "/Users/mattcastillo/Projects/bobbin-www/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex items-center justify-center h-16"> <p class="text-sm text-neutral-500">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${settings.name} </p> </footer>`;
}, "/Users/mattcastillo/Projects/bobbin-www/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://bobbin.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...seo })}${renderSlot($$result, $$slots["head-bottom"])}${renderHead()}</head> <body class="flex flex-col max-w-3xl mx-auto min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100 font-sans"> ${renderSlot($$result, $$slots["header"])} <main class="grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/mattcastillo/Projects/bobbin-www/src/layouts/Base.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-lg mx-auto h-full px-4 md:px-8"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/mattcastillo/Projects/bobbin-www/src/components/Container.astro", void 0);

export { $$Container as $, $$Base as a, settings as s };
