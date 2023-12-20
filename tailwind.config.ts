import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'namespace-black': 'var(--namespace-black)',
      }
    },
  },
  plugins: [],
}
export default config
