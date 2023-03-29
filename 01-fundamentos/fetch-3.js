// 'GET',
//,'https://reqres.in/api/users'
let ususario = {
    nombre:'Orlando',
    edad:39
}

fetch('https://reqres.in/api',{
    method:'POST',
    body: JSON.stringify(ususario),
    headers:{
        'Content-type':'application/json'
    }
})
.then(resp=> resp.json())
.then(resp=>{
    console.log(resp)
})
.catch(error => {
    console.log('Error en la peticion');
    console.log(error);
})