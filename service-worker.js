importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const {registerRoute} = workbox.routing
const {NetworkFirst} = workbox.strategies
const { CacheableResponsePlugin } = workbox.cacheableResponse;

// registerRoute(
//   ({request}) => request.destination === 'script',
//   new NetworkFirst()
// );

registerRoute(/\.(?:js|css)$/, new NetworkFirst({cacheName: 'static-cache'}));
registerRoute(
    new RegExp('https://.+'),
    new NetworkFirst({
        cacheName: 'api-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            })
        ]
    }),
    'GET'
);

workbox.precaching.precacheAndRoute([{url: 'index.html', revision: '3'}]);
// workbox.precaching.precacheAndRoute([{url: 'index.html', revision: `${new Date().getTime()}`}]);