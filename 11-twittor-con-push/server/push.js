const fs = require('fs');

const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');
const { subscribe } = require('diagnostics_channel');

const subscripciones = require('./subs-db.json');
module.exports.getKey = () =>{
    return urlsafeBase64.decode(vapid.publicKey);
};

module.exports.addSubscription = (subscripcion) => {
    subscripciones.push(subscripcion);
    
    fs.writeFileSync(`${__dirname}/subs-db.json`,JSON.stringify(subscripciones));
}