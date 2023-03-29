self.addEventListener('fetch',event => {
    if(event.request.url.includes('main.jpg')){
        let fotoReq = fetch('img/main-patas-arriba.jpg');
        event.respondWith(fotoReq);
    }
})