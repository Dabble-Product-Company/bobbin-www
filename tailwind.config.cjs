/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Instrument Sans",
          {
            fontVariationSettings: `"wdth" 100`,
          },
        ],
        serif: [
          "Instrument Serif",
          {
            fontVariationSettings: `"wdth" 75`,
          },
        ],
      },
    },
  },
  plugins: [],
};
