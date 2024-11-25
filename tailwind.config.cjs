/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
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
        display: [
          "Climate Crisis"
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
