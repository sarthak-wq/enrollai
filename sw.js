if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const o=e=>n(e,t),c={module:{uri:t},exports:a,require:o};s[t]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-40c80ae4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/browser-ponyfill-D1bSD1-C.js",revision:null},{url:"assets/index-BairVh1e.css",revision:null},{url:"assets/index-DigL09YN.js",revision:null},{url:"index.html",revision:"1ebc2aea1d0bd1983cb945fe78dab639"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/maskable-icon-512x512.png",revision:"e36fb18da2c835ab8a395553f505235e"},{url:"assets/pwa-192x192.png",revision:"d8f0fd26e4364114dd070c35d3c4edbe"},{url:"assets/pwa-512x512.png",revision:"7e1b1efeae1921cf9677641fbd1921d1"},{url:"assets/pwa-64x64.png",revision:"3b2f7efcc57734d6942bac1acf080c99"},{url:"manifest.webmanifest",revision:"721de66ebfbfed9a2416ea3e663210b5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.includes("assets")),new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxAgeSeconds:86400,maxEntries:100}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>e.pathname.includes("profile")),new e.NetworkFirst({cacheName:"profile-api",plugins:[new e.ExpirationPlugin({maxAgeSeconds:86400,maxEntries:100}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>e.pathname.includes("courses")),new e.NetworkFirst({cacheName:"courses-api",plugins:[new e.ExpirationPlugin({maxAgeSeconds:86400,maxEntries:100}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
