!function(){"use strict";self.CACHE_BUSTER="1552739595295|0.6085374470224021",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()});var e=function(e,t){return caches.keys().then(function(n){n.forEach(function(n){0===n.indexOf(e)&&n!==t&&caches.delete(n)})})},t="".concat("esw-asset-cache","-").concat("1"),n=["assets/auto-import-fastboot-d41d8cd98f00b204e9800998ecf8427e.js","assets/jotpad-d5ed57946599e8584d28535df5335e33.css","assets/jotpad-413df7e767ae065113f6832236284c4a.js","assets/vendor-11c5003c59ef520b8fd25fbbe259be3d.css","assets/vendor-3ad5cbfd765e291d8f2d3ccc701696fb.js"].map(function(e){return new URL(e,self.location).toString()});self.addEventListener("install",function(e){e.waitUntil(caches.open(t).then(function(e){return Promise.all(n.map(function(t){var n=new Request(t,{mode:"cors"});return fetch(n).then(function(n){if(n.status>=400){var c=new Error("Request for ".concat(t," failed with status ").concat(n.statusText));throw c}return e.put(t,n)}).catch(function(e){console.error("Not caching ".concat(t," due to ").concat(e))})}))}))}),self.addEventListener("activate",function(c){c.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===n.indexOf(t.url)&&e.delete(t)})})})]))}),self.addEventListener("fetch",function(e){var c="GET"===e.request.method,a=-1!==n.indexOf(e.request.url);c&&a&&e.respondWith(caches.match(e.request,{cacheName:t}).then(function(t){return t||fetch(e.request.url,{mode:"cors"})}))});function c(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}var a="".concat("esw-cache-fallback","-").concat("1"),s=["/api/v1/(.+)"].map(function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self.location;return decodeURI(new URL(encodeURI(e),t).toString())}(e);return new RegExp("^".concat(t,"$"))});self.addEventListener("fetch",function(e){var t=e.request;"GET"===t.method&&/^https?/.test(t.url)&&c(t.url,s)&&e.respondWith(caches.open(a).then(function(n){return fetch(t).then(function(e){return n.put(t,e.clone()),e}).catch(function(){return caches.match(e.request)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-cache-fallback",a))});var r=[],i=[];self.INDEX_FILE_HASH="23746b6022cf5c4619f256dc981aefcb";var o="".concat("esw-index","-").concat("1"),u=new URL("index.html",self.location).toString();self.addEventListener("install",function(e){e.waitUntil(fetch(u,{credentials:"include"}).then(function(e){return caches.open(o).then(function(t){return t.put(u,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index",o))}),self.addEventListener("fetch",function(e){var t=e.request,n=new URL(t.url),a="GET"===t.method,s=-1!==t.headers.get("accept").indexOf("text/html"),f=n.origin===location.origin,l=c(t.url,r),h=!i.length||c(t.url,i);!("/tests"===n.pathname&&!1)&&a&&s&&f&&h&&!l&&e.respondWith(caches.match(u,{cacheName:o}).then(function(e){return e||fetch(u,{credentials:"include"}).then(function(e){return caches.open(o).then(function(t){return t.put(u,e)}),e.clone()})}))})}();
//# sourceMappingURL=sw-ff27bbe8c2a5a336cd3cf7033ba31778.map