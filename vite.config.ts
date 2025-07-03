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
              networkTimeoutSeconds: 10,
              // Background sync for booking attempts
              plugins: [
                {
                  cacheKeyWillBeUsed: async ({ request }) => {
                    return `${request.url}?timestamp=${Date.now()}`;
                  }
                }
              ]
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
        // Enhanced offline support
        offlineGoogleAnalytics: false,
        cleanupOutdatedCaches: true,
        // Background sync support
        mode: 'production'
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
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['beauty', 'lifestyle', 'wellness', 'health', 'business'],
        lang: 'sv',
        dir: 'ltr',
        prefer_related_applications: false,
        edge_side_panel: {
          preferred_width: 400
        },
        icons: [
          // Icons with "any" purpose - SEPARATE ENTRIES
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
            sizes: '128x128',
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
            sizes: '152x152',
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
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png', 
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          // Icons with "maskable" purpose - SEPARATE ENTRIES
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            sizes: '128x128',
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
            sizes: '152x152',
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
            sizes: '384x384',
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
                sizes: '96x96',
                type: 'image/png'
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
                sizes: '96x96',
                type: 'image/png'
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
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Om oss',
            short_name: 'Info',
            description: 'Läs mer om La Barbiere',
            url: '/?tab=om-oss',
            icons: [
              {
                src: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          }
        ],
        share_target: {
          action: '/',
          method: 'GET',
          params: {
            title: 'title',
            text: 'text',
            url: 'url'
          }
        },
        protocol_handlers: [
          {
            protocol: 'tel',
            url: 'tel:%s'
          }
        ],
        handle_links: 'preferred',
        launch_handler: {
          client_mode: 'navigate-existing'
        },
        file_handlers: [
          {
            action: '/',
            accept: {
              'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.webp']
            }
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