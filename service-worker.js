// Service worker mínimo — solo lo necesario para que el navegador
// permita instalar la app ("Agregar a pantalla de inicio").

self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { self.clients.claim(); });
self.addEventListener('fetch', () => { /* deja pasar todas las peticiones normales */ });
