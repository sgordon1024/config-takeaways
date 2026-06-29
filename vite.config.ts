import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static single-page site. No backend; content is imported from src/data/content.json.
export default defineConfig({
  plugins: [react()],
})
