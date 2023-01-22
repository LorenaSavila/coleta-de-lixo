import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'maskable_icon_x192.png',
        'fonts/*.ttf',
        'images/*.png',
        'logo/*.png',
        'logo/logo192.png',
        'coleta seletiva/*.jpg',
        'background.jpg',
      ],
      manifest: {
        name: 'Coleta de lixo',
        short_name: 'Coleta de lixo',
        description: 'Informações sobre a coleta de lixo em Diamantina',
        theme_color: '#53b8e4',
        background_color: '#53b8e4',
        display: 'standalone',
        orientation: 'any',
        scope: '.',
        id: '/',
        start_url: './index.html',
        icons: [
          {
            sizes: '192x192',
            src: '/maskable_icon_x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            sizes: '192x192',
            src: '/logo/logo192.png',
            type: 'image/png',
          },
          {
            sizes: '256x256',
            src: '/logo/logo256.png',
            type: 'image/png',
          },
          {
            sizes: '384x384',
            src: '/logo/logo384.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: '/logo/logo512.png',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
