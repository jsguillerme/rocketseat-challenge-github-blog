import { defineConfig, loadEnv } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './.env',
  define: {
    ACCESS_TOKEN: `"${process.env.ACCESS_TOKEN}"`,
  },
})
