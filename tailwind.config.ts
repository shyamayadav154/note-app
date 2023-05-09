import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
        require('tailwind-scrollbar-hide'),
    ],
} satisfies Config;
