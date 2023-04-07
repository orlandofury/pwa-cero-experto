const fs = require('fs');

const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');
const { subscribe } = require('diagnostics_channel');
const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:orlandofury@gmail.com',
    vapid.publicKey,
    vapid.privateKey
)

let subscripciones = require('./subs-db.json');
module.exports.getKey = () =>{
    return urlsafeBase64.decode(vapid.publicKey);
};

module.exports.addSubscription = (subscripcion) => {
    subscripciones.push(subscripcion);
    
    fs.writeFileSync(`${__dirname}/subs-db.json`,JSON.stringify(subscripciones));
}

module.exports.sendPush = (post) => {
    console.log('MANDANDO PUSH');
    let notificacionesEnviadas = [];
    subscripciones.forEach((subscripcion,i) => {
        const pushProm = webpush.sendNotification(subscripcion, JSON.stringify(post))
                        .then( console.log('Notificacion enviada'))
                        .catch(err => {
                            console.log('Notificacion fallo');
                            //subscripcion no existe GONE ya no existe
                            if(err.statusCode === 410){
                                subscripciones[i].borrar = true;
                            }
                        });
        notificacionesEnviadas.push(pushProm);
    });
    Promise.all(notificacionesEnviadas).then(()=>{
        subscripciones = subscripciones.filter(subs => !subs.borrar);
        fs.writeFileSync(`${__dirname}/subs-db.json`,JSON.stringify(subscripciones));
    })

}