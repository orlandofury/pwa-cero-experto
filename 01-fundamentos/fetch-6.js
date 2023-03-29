fetch('no-encontrado.html')
     .then(resp=> resp.text())
     .then(html=>{
        //console.log(html);
        //cualquier error dentro de esta promesa se captura en el catch
        //los errores 404 y 400 se manejan con resp.ok y se puede hacer un throw new Error()
        let body = document.querySelector('body');
        body.innerHTML = html;
     })
     .catch(error=>{
        console.log('Error en la peticion');
        console.log(error);
     })