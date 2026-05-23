import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Locked VPP brand identity v1.0 (May 2026)
        // Source of truth: /brand/color/vpp-brand-tokens.json
        brand: {
          charcoal: {
            50:  '#F4F2EE',
            100: '#E1DDD4',
            300: '#9F9789',
            500: '#5C544A',
            700: '#3A332B',
            900: '#1F1A14',
          },
          terracotta: {
            100: '#F6D9CC',
            300: '#E89878',
            500: '#C24A22',
            600: '#A83E1C',
            700: '#8C3417',
          },
          cream: {
            50:  '#FAF6EC',
            100: '#F2EAD7',
            200: '#E8DDC5',
            300: '#D9CBAF',
          },
          sage: {
            100: '#DDE5DC',
            300: '#A8BDA6',
            500: '#7A9577',
            700: '#5A7257',
          },
        },
        ink: '#1F1A14',
        brown: '#5C544A',
        mid: '#A39B8C',
        rule: '#D9CBAF',
        terra: '#C24A22',
        'terra-light': '#E89878',
        'terra-dark': '#A83E1C',
        sage: '#7A9577',
        'sage-light': '#A8BDA6',
        sand: '#E8DDC5',
        'sand-light': '#F2EAD7',
        cream: '#FAF6EC',
        neutral: {
          'warm-gray': {
            400: '#A39B8C',
            700: '#5C544A',
          },
        },
        semantic: {
          action: '#C24A22',
          'action-hover': '#A83E1C',
          success: '#7A9577',
          warning: '#D97706',
          error: '#B91C1C',
          info: '#5C544A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
