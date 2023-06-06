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
    fontFamily: {
      serif: '"New York", -apple-system-ui-serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: '"SF Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.emerald,
        contrast: colors.pink,
        base: colors.zinc,        
        "foreground-muted": colors.zinc[400],
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

