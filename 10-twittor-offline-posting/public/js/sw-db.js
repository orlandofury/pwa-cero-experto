const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
    mensaje._id = new Date().toISOString();

    return db.put(mensaje).then( () => {
        self.registration.sync.register('nuevo-post');

        //simulando respuesta para el front-end
        const newResp = { ok: true, offline: true};

        //retornando nueva respuesta
        return new Response(JSON.stringify(newResp));
    })
}
