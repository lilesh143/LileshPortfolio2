import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': 'https://lilesh-portfolio2.vercel.app/'
        }
    },

    plugins: [react()],
})