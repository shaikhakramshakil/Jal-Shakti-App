
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Push Received.');
  const data = event.data ? event.data.json() : { title: 'Jal Shakti', body: 'A new notification!' };
  
  const title = data.title || 'Jal Shakti';
  const options = {
    body: data.body || 'You have a new update.',
    icon: '/icon.svg',
    badge: '/icon.svg'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
