const CACHE_NAME = 'oracle-traversee-v1';

const ASSETS = [
  '/oracle-traversee/',
  '/oracle-traversee/index.html',
  '/oracle-traversee/Cartes%20Blessures%20-%201.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%202.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%203.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%204.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%205.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%206.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%207.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%208.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%209.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2010.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2011.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2012.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2013.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2014.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2015.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2016.jpg',
  '/oracle-traversee/Cartes%20Blessures%20-%2017.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%201.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%202.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%203.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%204.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%205.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%206.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%207.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%208.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%209.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2010.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2011.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2012.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2013.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2014.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2015.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2016.jpg',
  '/oracle-traversee/Cartes%20Gue%CC%81rison%20-%2017.jpg'
];

// Installation : mise en cache de tous les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache en priorité, réseau en fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
