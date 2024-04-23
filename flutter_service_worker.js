'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0dcabe4d95b36609ffea8e098ccb10eb",
"version.json": "1dc5be0a0ec04de939679525f79b552d",
"favicon.ico": "1f6280119a86a8b6cc3a126722ec0bf8",
"index.html": "0f78ff6dd18ec020f633342c70d08cd4",
"/": "0f78ff6dd18ec020f633342c70d08cd4",
"main.dart.js": "5c3ac8841aa54834e2dfed4930683173",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "b80bffecf41815427f2866dcf3cefb04",
"icons/Icon-maskable-192.png": "cc4a44e555b31b49ea230b83dbc751e2",
"icons/Icon-maskable-512.png": "364b52cbf80393ea60808aac6a24cffa",
"icons/Icon-512.png": "364b52cbf80393ea60808aac6a24cffa",
"manifest.json": "7901f58b83a39b9328938c441d07215a",
"assets/AssetManifest.json": "d147221ce0e67aef26fef582e5bee2c4",
"assets/NOTICES": "3b1d75f713660d8b3215e4f306fc6338",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7888a14d4d5cc1858154bafdc31298f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9ba75d59b8b7d548c097dae7eae6d47e",
"assets/fonts/MaterialIcons-Regular.otf": "633a3e96072733cd7bd1673a640e8886",
"assets/assets/screenshot/portfolio_mini.png": "ba10f3c62e10e96d1c2ebe12511a2bdd",
"assets/assets/screenshot/my_portfolio.png": "229a32979a54c7659d0fc1411feace29",
"assets/assets/books/truth.png": "e6db742218a73349734eb7d986832985",
"assets/assets/books/precolonial.png": "dc18fdfdd07f551f582ce43908aa8df3",
"assets/assets/books/mythor.png": "bc1eaf0c5ec9f1bc596d79c36763114c",
"assets/assets/logo/email.png": "48267919f71759af3b2071e09ff6ef40",
"assets/assets/logo/twitterx.png": "e31643d355fd09443b77628f22cd10ec",
"assets/assets/logo/instagram.png": "645f46e9892c4e155c06660fdfad7bd2",
"assets/assets/logo/github.png": "93c1d28b5764a6a8b504bca3cc74580a",
"assets/assets/logo/gmail.png": "ae2acc0a283f844a3380650bab1cc466",
"assets/assets/logo/bled_logo1.png": "0da2d663e1fb6faf6ede19466c548cb1",
"assets/assets/logo/tiktok.png": "9e92307940b79551a49c486450367ae5",
"assets/assets/logo/linkedIn.png": "44d277d5f030f3eb0ca2c38d6afcf20c",
"assets/assets/logo/youtube.png": "1f32bfed359f27d8087d493625c08694",
"assets/assets/logo/facebook.png": "f617373a3023f756557305b9c72c7d42",
"assets/assets/icons/maintenance.png": "3cb89b1e699493ab68f165cad59b961a",
"assets/assets/icons/facts.png": "d93ab50a8bc73e2e7674fa659bab3e6e",
"assets/assets/icons/xcode.png": "51986a5995cc00e7e8757670e7009ed3",
"assets/assets/icons/python.png": "dae238e69e8546662582a57d22546c3e",
"assets/assets/icons/projects.png": "c3087af2b228f6356c2463aa74ae14df",
"assets/assets/icons/settings.png": "877aaea280a765de5266af349587640a",
"assets/assets/icons/ruby.png": "4abfaaa3bb4fe0ffd72873cee17c6a4e",
"assets/assets/icons/zsh.png": "da6314685454fe72976c6b729fc81342",
"assets/assets/icons/flutter.png": "703b38645826589bdb8017d3f0b6f21e",
"assets/assets/icons/npm.png": "dc5722ee073c31d4087d2a4e0c19279d",
"assets/assets/icons/reactnative.png": "d1cb3af1e22736e3f2fe73be5fa8c9e3",
"assets/assets/icons/bash.png": "e7a954d6b7cec12ab55ca152069742e5",
"assets/assets/icons/github.png": "65d850b3b0bc843bf6b70af84b574efd",
"assets/assets/icons/firebase.png": "3bc480b7cf799238d5817837e5b4678c",
"assets/assets/icons/logout.png": "f73e03df007b0e98b7d84095edee8756",
"assets/assets/icons/java.png": "5a70ddd2ad57f7d7c361ae003ae7770f",
"assets/assets/icons/drawing.png": "fc906a9ece54cfab36def09d49c900ad",
"assets/assets/icons/rust.png": "c52abfbadb75ea982373e8e7f23ddf20",
"assets/assets/icons/adobe.png": "7ddc9c925d425fc5e15be3bfde31e3e4",
"assets/assets/icons/js.png": "99d4afa6fa3313bb2567908cb71e95ea",
"assets/assets/icons/rightarrow.png": "c1e6b733b19ec3482f4fd5c44b0710a5",
"assets/assets/icons/leftarrow.png": "598e9528c33806abcb3014ab8feefc77",
"assets/assets/icons/kyb.jpg": "3da7a2163aba3ec76dbb0a8cf320481c",
"assets/assets/icons/contact.png": "22761bb6f5609e42f96cee660ced58cb",
"assets/assets/icons/kyb3.png": "cae0dc19db6a8e1927130636958a46df",
"assets/assets/icons/node.png": "d5d078c25e06d9f6187e029b6bf5cba2",
"assets/assets/icons/kyb2.png": "2b0340290bc62c707e57808ef249a2e1",
"assets/assets/icons/visualstudiocode.png": "64ee4b6c903cbc9f3e1f18a9c3096185",
"assets/assets/icons/project.png": "7f6fb3ce74a15da7480d8a276ab89d97",
"assets/assets/icons/cplus.png": "baaa832726b13cb7645fcb473e4fc31f",
"assets/assets/icons/homemenu.png": "51057435241dc4dd326f8581655f7eeb",
"assets/assets/icons/processor.png": "5f0b8ce21b1b52e6efce1491cb143941",
"assets/assets/icons/go.png": "b4985380979dc5d105d856467ce742c3",
"assets/assets/icons/csharp.png": "4e0a794f8ddbf93a01609b85aa763174",
"assets/assets/icons/mysql.png": "e42187b2f26083295041343ef0298759",
"assets/assets/icons/kyb1.jpg": "c087f2e8ad4a2e7d72954870f9b247c3",
"assets/assets/icons/portfolio.png": "63417afe267c20de84ff925768992726",
"assets/assets/icons/kyb5.png": "d718fc7c0674c443ebb7e908fba92668",
"assets/assets/icons/swift.png": "a9e0b4066468e2d8e7e7ad26f8a97412",
"assets/assets/icons/profile.png": "958b808927999acd78c0d2d790903000",
"assets/assets/icons/binary.png": "3947e0306fb34e8c1a42e968195eb98b",
"assets/assets/icons/homebrew.png": "c8d9d595451945e3d55262cdcce5026f",
"assets/assets/icons/androidstudio.png": "7d95ce84b9e32fe9b9aecd12df289cf0",
"assets/assets/icons/c.png": "9f4c53d7bb0c658d69a5578331f8c6aa",
"assets/assets/icons/typescript.png": "5208bd274b4120581aacecd5bd94205b",
"assets/assets/icons/about.png": "87686f7bbe6a1de05f7f1e2964e44e49",
"assets/assets/icons/php.png": "26a12a8eb1b9502466e989540ff31f67",
"assets/assets/icons/admin.png": "d1979558e7298bc2ddb19754639cb116",
"assets/assets/icons/css.png": "f5340b78453a005239dfc3ba7e444a71",
"assets/assets/icons/skills.png": "90a81421a4f3bba9c6d83c8f12c15d7a",
"assets/assets/icons/dart.png": "1734611e46c1797aa993d0d93e2b842a",
"assets/assets/icons/gimp.png": "6fd3bf240801e64d230fd802952df0e7",
"assets/assets/icons/downarrow.png": "be8ddfc43a3098f0cfc7d050259c1cc6",
"assets/assets/icons/kotlin.png": "3df9a2b19109df1cbc6438978f49efcd",
"assets/assets/icons/googlecloud.png": "791693986325258f13ee38308941d2e9",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "3f19809190a2866b6849ce17d97f26cc",
"canvaskit/canvaskit.js.symbols": "4e057eda12866a5b55673b200c2ca372",
"canvaskit/skwasm.wasm": "b32a9969e65a7f573044b758f53ce3cf",
"canvaskit/chromium/canvaskit.js.symbols": "1a402b5f22e7bf3062421e850d025c3b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "85712bbf9dc9b01ec7be9a001e834c7c",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "59fddb8ae82f2156f987d6fce4584928",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
