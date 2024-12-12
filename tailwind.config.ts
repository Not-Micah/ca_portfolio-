import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat'], 
        accent: ['"Libre Baskerville"'], 
      },
      colors: {},
      maxWidth: {
        'max': '1300px',
      },
      spacing: {
        'default': '48px',
        'tight': '18px',
      },
    },
  },
  plugins: [],
} satisfies Config;
