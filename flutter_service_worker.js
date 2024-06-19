'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e2df34617db0bcd65ec1f33a4f2a58f9",
"index.html": "34aa9aed8025af3ae53808d679f1167d",
"/": "34aa9aed8025af3ae53808d679f1167d",
"main.dart.js": "033bb2d9d86e455b425f07d64a225127",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a2d775029f989ccfa86034fb30f93869",
"assets/asset/github_logo.json": "79b88b248a70055c5af808e04d82baba",
"assets/asset/ad2.png": "636253e86a723483fe6ce38018306dd4",
"assets/asset/ad3.png": "6cebc9e93bbcced9797e1b01d0288ef3",
"assets/asset/ad1.png": "29fb76b0e28894d26b3e815f4197b4d8",
"assets/asset/bg5.json": "c167c9d2fae87bb79e698a9eb398bcef",
"assets/asset/Ajish.png": "ccba4a0b651c3de102d5430b3ca8aae0",
"assets/asset/flutter.json": "0e6337e7fbc4ce8fefa9b077bd4c2fa2",
"assets/asset/fp2.png": "02230163f88d9e5416ff43616bda7266",
"assets/asset/hc%25201.png": "cc349501fd35bb25ddb0f9d5089f1e9c",
"assets/asset/fp3.png": "980b279d9d396ba352a4dfb5aa0387c8",
"assets/asset/fp1.png": "5498e9f2631920552b8bc98f3731647b",
"assets/asset/swift_logo.json": "bb4885e1a63d02dd1b6105785438b9a8",
"assets/asset/record-Nokia.png": "f46b112c058809ace660e0be62380757",
"assets/asset/vc1.png": "e83087f7149176ade17a499c7b449b24",
"assets/asset/vc2.png": "e7391a4d47be4e1879c92b052fb8c8eb",
"assets/asset/vc3.png": "7d8b082839b53122c62aad101ba7e89e",
"assets/asset/sample.png": "ef9778dac62f6bdf35c7abb52394416d",
"assets/asset/firebase.json": "cda05e7a6ec29d8b26a3ba30abbd8a34",
"assets/asset/FAS3.png": "dea150923c2324760a38e32e505d2a9f",
"assets/asset/anand.png": "c722582b583eb8882ceec6771b74d944",
"assets/asset/v1.jpg": "d3e68e280d40cfa43a4f75e8c739a2b7",
"assets/asset/FAS2.png": "4653e20911c647836a3f1097d2757d30",
"assets/asset/v3.png": "f74b3d3f6d3480a3248177faa4b9660c",
"assets/asset/home-Nokia.png": "c354bc95a409358c5aaa8c05c969e923",
"assets/asset/save-Nokia.png": "d05d15e90b3c1cfcd2aacd57d2677366",
"assets/asset/flutteranimation.json": "07244784ffe1d15a66b2792fa9119a1a",
"assets/asset/FAS1.png": "ddd864033011a6292caca98fb0f122d8",
"assets/asset/v2.png": "ff0910e73919c3b6dc4e5bd7e124d418",
"assets/asset/cakey1.png": "6578495999de3d09c264cdaf3aaa00a9",
"assets/asset/hc11.png": "9cb740fb128660600d9a9e06394a785e",
"assets/asset/cakey2.png": "d4f817c17350f4f90faed454557e5381",
"assets/asset/login-Nokia.png": "562193993927275a0e36197c542a0c22",
"assets/asset/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/asset/cakey3.png": "672958f189ad5ed646bd6ee69e0e6a3b",
"assets/asset/welcome.png": "ac9f47300f1e82c85f2f8932cf5bd9fc",
"assets/asset/hc2.png": "5b8e032f89ac4d6f9fc4fdc98452d5e2",
"assets/AssetManifest.json": "d46194c9d82f1ceece587c2894961def",
"assets/NOTICES": "546d43e35cc0029fd86e0ecfc29e9786",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e2ca3ff285c2a360d3496d6a5e5e175f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "30c2f0c499dbbb70d60c8d94b501ed4d",
"assets/fonts/MaterialIcons-Regular.otf": "1c9779343367d7d290e6f38cd11b65c7",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
