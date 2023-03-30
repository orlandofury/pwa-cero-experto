


self.addEventListener('fetch', event => {
    // const offlineResp = new Response(`
    //     Bienvenido a la Pagina web.
    //     test
    //     Oops! al parecer no tienes internet verificalo para usar la pagina.
    // `);

//     const offlineResp = new Response(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Mi PWA</title>

// </head>
// <body class="container p-3">
// <img src="img/main.jpg" alt="Vías del tren" class="img-fluid">
    
// <h1>Bienvenido Offline mode</h1>
// <hr>

// <p>
//     Las PWAs son el siguiente paso a las páginas y aplicaciones web.
// </p>
// <p>
//     Cargan sumamente rápido y no necesitan conexión a internet para trabajar
// </p>

// </body>
// </html>
//     `,{
//         headers:{
//             'Content-type':'text/html'
//         }
//     }) ;
    const offlineResp = fetch('/pages/offline.htmml');
    const resp = fetch(event.request).catch(() => offlineResp);
    event.respondWith(resp);
});