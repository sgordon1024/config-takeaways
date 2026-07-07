import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static single-page site. No backend; content is imported from src/data/content.json.
// `base` matches the GitHub Pages project path (sgordon1024.github.io/config-takeaways/).
export default defineConfig({
  base: '/config-takeaways/',
  plugins: [react()],
})
