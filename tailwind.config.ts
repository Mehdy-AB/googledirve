import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E8F3F1",
        foreground: "#66818C",
        secondColor:"#667d92"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Register the custom font
      },
      fontSize: {
        'tiny': '0.625rem', 
        '8px': '8px',     
        '12px': '12px', 
      },
    },
  },
  plugins: [],
} satisfies Config;
