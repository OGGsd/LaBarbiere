import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'booking-system-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          // Cache Swedish routes specifically
          {
            urlPattern: /^.*\/(integritetspolicy|anvandardvillkor|about|om-oss).*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'app-routes-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
              },
              networkTimeoutSeconds: 3
            }
          }
        ],
        // Critical: Fallback to main app for SPA routing, not offline page
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          // Don't fallback for:
          /^\/_/, // Vite internal routes
          /\/[^/?]+\.[^/]+$/, // Files with extensions
          /^\/api\//, // API routes
          /^\/assets\//, // Asset files
          /^\/sw\.js$/, // Service worker
          /^\/manifest\.json$/, // Manifest
          /^\/offline\.html$/ // Offline page itself
        ],
        // Include Swedish routes in precaching
        navigateFallbackAllowlist: [
          /^\/$/,  // Home
          /^\/about$/,  // About
          /^\/om-oss$/,  // Swedish about
          /^\/integritetspolicy$/,  // Swedish privacy
          /^\/anvandardvillkor$/,  // Swedish terms
          /^\/privacy$/,  // English privacy (redirects)
          /^\/terms$/   // English terms (redirects)
        ],
        skipWaiting: true,
        clientsClaim: true,
        // Handle offline scenarios separately
        offlineGoogleAnalytics: false,
        cleanupOutdatedCaches: true
      },
      includeAssets: [
        'La-barbiere-logga-1000-x-500-px-1024x512.png',
        'offline.html'
      ],
      manifest: {
        name: 'La Barbiere - Jönköpings finaste frisörsalong',
        short_name: 'La Barbiere',
        description: 'Professionella frisörbehandlingar i Jönköping. Klippning, färgning, styling och skägg. Boka din behandling online.',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['beauty', 'lifestyle', 'wellness', 'health'],
        lang: 'sv',
        icons: [
          // Icons with "any" purpose
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png', 
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          // Separate icons with "maskable" purpose
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png', 
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Boka klippning',
            short_name: 'Klippning',
            description: 'Boka professionell klippning',
            url: '/?category=klippning',
            icons: [
              {
                src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
                sizes: '96x96'
              }
            ]
          },
          {
            name: 'Boka färgning', 
            short_name: 'Färgning',
            description: 'Boka hårfärgning och behandlingar',
            url: '/?category=fargning',
            icons: [
              {
                src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
                sizes: '96x96'
              }
            ]
          },
          {
            name: 'Ring oss',
            short_name: 'Ring',
            description: 'Ring La Barbiere direkt',
            url: 'tel:0365505311',
            icons: [
              {
                src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
                sizes: '96x96'
              }
            ]
          }
        ]
      },
      devOptions: {
        enabled: false
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          spring: ['@react-spring/web']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});