const db = new PouchDB('mensajes');

function guardarMensaje(mensaje) {
    mensaje._id = new Date().toISOString();

    db.put(mensaje).then( () => {
        console.log('Mensjae guarado para postrerior posteo')
    })
}
