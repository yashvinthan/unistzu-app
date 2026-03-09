import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [
            'kept-tours-beats-weblogs.trycloudflare.com',
            'test.webistzu.online'
        ]
    }
})
