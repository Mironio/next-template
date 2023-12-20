import type { Config } from 'tailwindcss'
import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
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
})
export default config
