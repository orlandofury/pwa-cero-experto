function sumarLento(numero){
    return new Promise(
        function(resolve,reject){
            setTimeout(() => {
                resolve(numero+1);
                //reject('Sumar lento fallo')
            }, 800);
        }
    );
}

let sumarRapido = (numero) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(numero+1);
        }, 300);
    })
}

Promise.race([sumarLento(5),sumarRapido(10)])
       .then(respuesta =>{
        console.log(respuesta);
       })