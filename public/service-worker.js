self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here if you want to activate the SW immediately
    self.skipWaiting();
});
  
self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    // Perform any other activation steps if needed
});
  
self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Add your fetch handler logic here if needed
});
  