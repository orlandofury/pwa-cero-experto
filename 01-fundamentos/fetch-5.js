fetch('https://reqres.in/api/users/10000')
    .then(resp=> {
        console.log(resp)

        //si se necesita utilizar la resp varias veces aqui
        //es necesario agregar el .clone()
        if(resp.ok){
            return resp.json();
        }
        else{
            throw new Error('No existe el usuario 10000')
            //console.log('No existe el usuario 10000')
        }
        // resp.clone().json().then(usuario => {
        //     console.log(usuario.data);
        // })
        // resp.json().then(usuario => {
        //     console.log(usuario.data);
        // })
    })
    .then(console.log)
    .catch(error=>{
        console.log('Error en la peticion')
        console.log(error)
    })
    