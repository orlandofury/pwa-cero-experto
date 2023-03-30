// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Descargar assets
    //Creamos un cache
    console.log("SW: Instalando SW");
    const instalacion = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);
    }
    );
    event.waitUntil(instalacion);
});

//cuando el SW toma el control de la aplicacion
self.addEventListener('activate', event => {
    //Borrar cache viejo
    console.log('SW: Activo y listo para controlar la app');
});


//FETCH: Manejo de peticiones HTTP

self.addEventListener('fetch',event =>{
    //console.log('SW:',event.request.url);

    // if(event.request.url.includes('https://reqres.in/')){
    //     const resp = new Response(`{ok: false, mensaje:'jajajajja'}`);
    //     event.respondWith(resp);
    // }

})

//SYNC: Recuperamos la conexion a internet
self.addEventListener('sync',event=>{
    console.log('Tenemos conexion!');
    console.log(event);
    console.log(event.tag);
});

//PUSH
self.addEventListener('push',event => {
    console.log('Notificacion recibida');
});