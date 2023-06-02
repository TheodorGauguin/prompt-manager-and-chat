import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],    
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.purple,
        contrast: colors.emerald,
        base: colors.stone,        
        "foreground-muted": colors.stone[400],
      },
      fontFamily: {
        'handwritten': ['Bradley Hand'],
      },

      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}

