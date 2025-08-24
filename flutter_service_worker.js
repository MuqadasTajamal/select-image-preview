'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91b7692161309b795c5bfea22ec70acd",
"assets/AssetManifest.bin.json": "c69a227e26600a7e92a26d7a1701131e",
"assets/AssetManifest.json": "c9f3e6034d95a4f958b8027656325973",
"assets/FontManifest.json": "a93e3262d5d042525b24adc77599435a",
"assets/fonts/baloo.ttf": "84cab1f385ac5f76267aca40fa81353e",
"assets/fonts/jose.ttf": "9e85e7de127ce629d3d112f122041886",
"assets/fonts/jose1.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/jose2.ttf": "51ed854c6cd881c8566ed8d8cb7213c1",
"assets/fonts/jose3.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/jose4.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/lobst.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/fonts/lobster.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/satify.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/image/1.png": "e8fe3d6c2a0bfe335cf5858d4d22bf0c",
"assets/image/A.jpeg": "6ff72c3ec000e80eeda7e572e03c665b",
"assets/image/A.png": "b0aeff08c510cc631c8baa7f3e67ebdd",
"assets/image/ad.png": "fbe3f1b7c62e58525dac55fe860098f7",
"assets/image/b.jpeg": "210e653113f03260bd89955d11610b0e",
"assets/image/b.webp": "67f529c76d3ed98bbe9c64f69c4b4e72",
"assets/image/ba.png": "3e05f44ee4872ddf933fe8b255a06827",
"assets/image/C.jpeg": "02c7dbd3f562239eac3f9d1ce9d107f7",
"assets/image/d.png": "fe1f9666040ddb73d3450240af1e5f30",
"assets/image/f.jpeg": "dc83a38799cfd11032c9afeed3eb8841",
"assets/image/F.png": "34207180eff542f6597ba62855616db2",
"assets/image/f2.png": "8bdc70360d1040dedb37817b11821a1f",
"assets/image/fl.png": "98e7d7f8c8b85bdc4da69913a9cbd048",
"assets/image/g.jpg": "0c4d73a726377a2a6d4fcd236efb4740",
"assets/image/g1.jpeg": "e7cc1277fbcc242d6f3bf81200581514",
"assets/image/g2.jpg": "0888a89509adf86e64eaa4b355eb9145",
"assets/image/g2.png": "2dbd66701035e010d1047c3a211616eb",
"assets/image/google.png": "0b239b8c0e972a5156e13f84aeead9ea",
"assets/image/i.png": "17513ab7ea35ba6b8ae49faa6754f4b1",
"assets/image/im.png": "1f6f56ff345c69f6001a9de6d7ede862",
"assets/image/ima.png": "979baeae68774a84d3bfdb5fbcf1fca3",
"assets/image/images.jpeg": "6ebc13637bbae7a0e688c3c0c485c3f3",
"assets/image/insta.jpeg": "5451cfdb9ae6045bcd26f625a75d1a6e",
"assets/image/j.png": "52d134312c4c0cca5c4674ac0ca85e4e",
"assets/image/L.jpeg": "66f79bb71242a794577fc4f6bf4b86ae",
"assets/image/l.json": "bb24e0a13ae5e18b5293b4713db50837",
"assets/image/n.jpeg": "cffb259623593bf9cea7f8fef4069a38",
"assets/image/p.png": "7644b03706ae36cc51dcf922088e994f",
"assets/image/p2.jpeg": "2d2068b34cb8e8aae4cb9bd4e1a8c76a",
"assets/image/p3.jpeg": "328a86efa22a0b394cf9117fa855d341",
"assets/image/Q.png": "e9d8b16e8c2f59ac9ebfb5956ef7b722",
"assets/image/R.json": "f6a03a97b60427121c932f91859da610",
"assets/image/r.png": "f4b3199460e28458fdeda68d6ad84c79",
"assets/image/s.png": "f2bc4990f340d86b047735f45c4b88b2",
"assets/image/sandwich.jpg": "78f1cbd55cf24ef15cca4965083eae86",
"assets/image/sb.png": "461c602fc5c7a6bfe9f2ea0c5e66bf87",
"assets/image/star.json": "e94f358f6d62bb9cda63ba7a8f7471bd",
"assets/image/w.png": "475383844f077feb22cd9ef09fb3789e",
"assets/image/Y.png": "a18fe6889acb15cd17d06baaf4b25f0c",
"assets/image/yt.png": "6dc7a341f8129e8b2219abe361f06be0",
"assets/NOTICES": "a6963a410f7f3cfdcc2525404d86584a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a9727f0d274850d444dce8225d549536",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d7dc5b553fa27b313a22478fae4fe91",
"/": "6d7dc5b553fa27b313a22478fae4fe91",
"main.dart.js": "e9623424a4978731eaa3e99ad4b8418a",
"manifest.json": "8f480d3b5a17c568263d27c996f4ac82",
"version.json": "6ee8c46d92c7c8ba709327bf7c5847e5"};
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
