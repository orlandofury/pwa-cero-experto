function sumarUno(numero){
    var promesa = new Promise(
        function(resolve,reject){
            console.log(numero);
            if(numero>=7){
                reject('El numero es muy alto');
            }
            setTimeout(() => {
                resolve(numero+1);
            }, 800);
        }
    );
    return promesa;
}

sumarUno(5).then(sumarUno)
           .then(sumarUno) 
           .then((nuevoNumero) => console.log(nuevoNumero))
           .catch(error =>{
                console.log('ERROR EN PROMESA');
                console.log(error);
            })
  

// sumarUno(7)
//     .then((nuevoNumero) => console.log(nuevoNumero))
//     .catch(error =>{
//         console.log('ERROR EN PROMESA');
//         console.log(error);
//     } )
  
// sumarUno(5)
// .then(nuevoNumero => {
//     //console.log(nuevoNumero);
//     return sumarUno(nuevoNumero);
// })
// .then(nuevoNumero=> {
//     console.log(nuevoNumero);
//     return sumarUno(nuevoNumero);
// })
// .then(nuevoNumero=> {
//     console.log(nuevoNumero);
// })