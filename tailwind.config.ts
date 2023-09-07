import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-mobile': "url(/assets/Vector.png)"
      },
      colors: {
        'blue-primary': '#010D50',
        'blue-primary-light': '#0328EE',
        'blue-primary-dark': '#010725',
        'light-gray': '#FFFFFF'
      }
    }
  },
  plugins: []
}
export default config
