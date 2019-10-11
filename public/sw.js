var doCache = true; // Set this to true for production

var CACHE_NAME = "my-pwa-cache-v1";
const FILES_TO_CACHE = [
  '/offline.html',
];

self.addEventListener("activate", event => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
);
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("install", function(event) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        fetch("manifest.json")
          .then(response => {
            response.json();
          })
          .then(assets => {
            const urlsToCache = ["/", assets["main.js"]];
            cache.addAll(urlsToCache);
            console.log("cached");
          });
      })
    );
  }
});

self.addEventListener("fetch", function(event) {
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('offline.html');
                });
          })
  );
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});