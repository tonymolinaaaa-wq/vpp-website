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
        ink: '#1E1C1A',
        brown: '#4A3728',
        mid: '#7A6558',
        rule: '#C4B9AF',
        terra: '#C4613A',
        'terra-light': '#D4825E',
        'terra-dark': '#9E4A2A',
        sage: '#6B8C6E',
        'sage-light': '#8FAF92',
        sand: '#E8DDD4',
        'sand-light': '#F2EDE8',
        cream: '#FAF7F4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
