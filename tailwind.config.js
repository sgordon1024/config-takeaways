/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Uber-inspired anchors + restrained accent
        ink: '#000000',
        paper: '#FFFFFF',
        surface: '#F6F6F6',
        muted: '#6B6B6B',
        hairline: '#E6E6E6',
        accent: {
          DEFAULT: '#06C167', // bright green, used sparingly
          ink: '#04341d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      fontSize: {
        // Huge, tight display scale
        display: ['clamp(3rem, 11vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        headline: ['clamp(2.25rem, 6vw, 4.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        grid: '1240px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
