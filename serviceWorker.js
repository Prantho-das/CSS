const staticDevCoffee = "pPwa_by_prantho"
const assets = [
    "agency/css/owl.carousel.min.css",
    "agency/css/owl.theme.default.min.css",
    "agency/css/style.css",
    "agency/js/bootstrap.min.js",
    "agency/js/jquery-3.4.1.min.js",
    "agency/js/jquery.counterup.min.js",
    "agency/js/typed.js",
    "agency/js/owl.carousel.min.js",
    "agency/js/script.js",
    "agency/index.html",
    "agency/"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
// self.addEventListener("install", e => {
//     e.waitUntil(
//         caches.open(cacheName).then(cache => {
//             cache.addAll(staticAssets)
//         })
//     )
// })
// self.addEventListener("install", installEvent => {
//     installEvent.waitUntil(
//         caches.open(cacheNamePrantho).then(cache => {
//             cache.addAll(staticAssets)
//         })
//     )
// })

// self.addEventListener('activate', (e) => {
//     console.log(e);
// })


// self.addEventListener('fetch', event => {
//     const req = event.request;
//     event.respondWith(cacheFirst(req));
// });
// async function cacheFirst(req) {
//     const cache = await caches.open(cacheName);
//     const cachedResponse = await cache.match(req);
//     return cachedResponse || fetch(req);
// }
// const staticDevCoffee = "Prantho_pwa_2021"
// const assets = [
//     "/",
//     "/index.html",
//     "/css/style.css",
//     "/js/app.js",
// ]


// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(res => {
//             return res || fetch(fetchEvent.request)
//         })
//     )
// })