var self = this;
self.addEventListener('fetch',event => {
    const resp = fetch(event.request)
    .then(res => {
        //Los errores 404 y 400 no se devuelven en el catch
        //se deben manejar internamente en el then
        return res.ok ? res:fetch('img/main.jpg');
    });
    event.respondWith(resp);
})