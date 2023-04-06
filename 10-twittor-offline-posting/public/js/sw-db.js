const db = new PouchDB('mensajes');
/**
 * Guarda mensaje en indexDB via PouchDB y crea el tag nuevo-post para sincronizar
 * @param {*} mensaje 
 * @returns  Promise
 */
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
/**
 * Postea mensajes desde el indexDB leyendo PouchDB
 */
function postearMensajes(){
    const posteos = [];
    return db.allDocs({includes_docs: true}).then(docs=>{
        docs.rows.forEach(row => {
            const doc = row.doc;
            const fetchProm = fetch('api',{
                                    method:'POST',
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify(doc)
                                }).then( res => {
                                    //si se posteo borrarlo del db para no postearlo 2 veces luego de sincronizar
                                    return db.remove(doc);
                                });
            posteos.push(fetchProm);
        });
        return Promise.all(posteos);
    })
}