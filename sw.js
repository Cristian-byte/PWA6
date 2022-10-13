const CACHE_NAME = 'cache-1';


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

    //const cacheProm = caches.open('cache-1')
    const cacheProm = caches.open(CACHE_NAME)
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


/*self.addEventListener('fetch', e =>{

    //1- Cache Only
    e.respondWith( caches.match( e.request ) );
})*/ 

self.addEventListener('fetch', e => {


    // 2- Cache with Network Fallback
    const respuesta = caches.match(e.request)
        .then(res => {

            if (res) return res;

            //No existe el archivo
            //tengo que ir a la web

            return fetch(e.request).then(newResp => {

                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(e.request, newResp);
                    });

                return newResp.clone();
            });

        });
    });