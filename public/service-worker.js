const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',           // Root URL
  '/home',       // Home route
  '/index.html', // Main HTML file
  '/main.js',    // Main JavaScript file
  '/styles.css', // CSS file
];

self.addEventListener('install', event => {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('All resources cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Failed to cache resources', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log('Handling fetch event for', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          console.log('Serving from cache:', event.request.url);
          return cachedResponse; // Serve from cache
        }
        return fetch(event.request).then(networkResponse => {
          console.log('Fetching from network:', event.request.url);
          return networkResponse;
        });
      })
      .catch(error => {
        console.error('Fetch failed; returning offline page instead.', error);
        return caches.match('/'); // Fallback to root if fetch fails
      })
  );
});
