/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          'cream': '#F5F5DC',
          'light': '#D2B48C',
          'medium': '#8B4513',
          'dark': '#654321',
          'espresso': '#3C2A1A',
        }
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Source Sans Pro', 'sans-serif'],
      },
      animation: {
        'brew': 'brew 3s ease-in-out infinite',
        'steam': 'steam 2s ease-in-out infinite',
      },
      keyframes: {
        brew: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-coffee-espresso)',
            a: {
              color: 'var(--color-coffee-medium)',
              '&:hover': {
                color: 'var(--color-coffee-dark)',
              },
            },
            h1: {
              color: 'var(--color-coffee-espresso)',
              fontFamily: 'Crimson Text, serif',
            },
            h2: {
              color: 'var(--color-coffee-espresso)',
              fontFamily: 'Crimson Text, serif',
            },
            h3: {
              color: 'var(--color-coffee-espresso)',
              fontFamily: 'Crimson Text, serif',
            },
            strong: {
              color: 'var(--color-coffee-dark)',
            },
            blockquote: {
              borderLeftColor: 'var(--color-coffee-light)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
