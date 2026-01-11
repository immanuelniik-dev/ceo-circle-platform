import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // This tells it to look in your "app" folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config