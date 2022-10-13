
self.addEventListener('fetch', event => {

    /*const offlineResp = new Response(`
    
        ¡Bienvenido a mi Página Web!

        Discupla, para poder usarla necesitas conexion a internet
    
    `);*/

    
    //const offlineResp = new Response(`
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <title>Mi PWA</title>

    // </head>
    // <body class="container p-3">

    // <h1>Offline Mode</h1>

    // </body>
    // </html>
    // `, {
    //     headers: {
    //         'Content-Type': 'text/html'
    //     }
    // });

    //const offlineResp = fetch('pages/offline.html');

    /*const resp = fetch(event.request)
        .catch(() => offlineResp);

    event.respondWith(resp);*/

});

    const cacheProm = caches.open('cache-1')
        .then(cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            ]);

        });

    e.waitUntil(cacheProm);