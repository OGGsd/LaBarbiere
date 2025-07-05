// Enhanced Service Worker for La Barbiere PWA
// Provides offline support, background sync, and enhanced caching

const CACHE_NAME = 'la-barbiere-v1';
const OFFLINE_URL = '/offline.html';

// Files to cache immediately
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/La-barbiere-logga-1000-x-500-px-1024x512.png',
  '/favicon/apple-icon-180x180.png',
  '/favicon/apple-icon-152x152.png',
  '/favicon/apple-icon-1024x1024.png',
  '/favicon/android-icon-192x192.png',
  '/favicon/android-icon-512x512.png'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching essential files');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        // Force activation of new service worker
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Try to fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Network failed, try to serve offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            
            // For other requests, return a basic offline response
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Background sync for booking attempts
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'booking-sync') {
    event.waitUntil(
      // Handle background booking sync
      handleBookingSync()
    );
  }
});

// Handle background booking synchronization
async function handleBookingSync() {
  try {
    // Get pending bookings from IndexedDB or localStorage
    const pendingBookings = await getPendingBookings();
    
    for (const booking of pendingBookings) {
      try {
        // Attempt to submit booking
        const response = await fetch(booking.url, {
          method: 'POST',
          headers: booking.headers,
          body: booking.data
        });
        
        if (response.ok) {
          // Remove from pending bookings
          await removePendingBooking(booking.id);
          
          // Notify user of successful booking
          self.registration.showNotification('Bokning genomförd!', {
            body: 'Din bokning har genomförts framgångsrikt.',
            icon: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            badge: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
            tag: 'booking-success'
          });
        }
      } catch (error) {
        console.log('Booking sync failed for:', booking.id, error);
      }
    }
  } catch (error) {
    console.log('Background sync error:', error);
  }
}

// Helper functions for booking sync
async function getPendingBookings() {
  // In a real implementation, this would read from IndexedDB
  // For now, return empty array
  return [];
}

async function removePendingBooking(bookingId) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Removing pending booking:', bookingId);
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Ny uppdatering från La Barbiere',
    icon: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
    badge: '/La-barbiere-logga-1000-x-500-px-1024x512.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Öppna app'
      },
      {
        action: 'close',
        title: 'Stäng'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('La Barbiere', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.action);
  
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data?.url || '/')
    );
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  console.log('Periodic sync triggered:', event.tag);
  
  if (event.tag === 'booking-check') {
    event.waitUntil(
      // Check for booking updates
      checkBookingUpdates()
    );
  }
});

async function checkBookingUpdates() {
  try {
    // In a real implementation, this would check for booking confirmations
    console.log('Checking for booking updates...');
  } catch (error) {
    console.log('Periodic sync error:', error);
  }
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_BOOKING') {
    // Cache booking data for offline submission
    event.waitUntil(
      cacheBookingData(event.data.booking)
    );
  }
});

async function cacheBookingData(bookingData) {
  try {
    // In a real implementation, this would store in IndexedDB
    console.log('Caching booking data for offline submission:', bookingData);
  } catch (error) {
    console.log('Error caching booking data:', error);
  }
}

console.log('La Barbiere Service Worker loaded successfully');