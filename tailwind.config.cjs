/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        noisy: "url('/noisy.png')",
      },
      colors: {
        primary: "#119955",
      },
      fontFamily: {
        share: ["Share Tech Mono", "Roboto"],
        ibm: ["IBM Plex Sans"],
        operator: ["Operator Mono"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
