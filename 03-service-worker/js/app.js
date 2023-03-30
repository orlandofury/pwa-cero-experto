

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then(
        req => {
            // setTimeout(() => {
            //     req.sync.register('posteo-gatitos');
            //     console.log('Se enviaron fotos de gatos');
            // }, 3000);
            Notification.requestPermission().then(
                result => {
                    console.log(result);
                    req.showNotification('Hola Mundo!');
                }
            )
        }
    );

    
}

//if(window.SyncManger)

// fetch('http://reqres.in/api/users')
//     .then(resp=>resp.text())
//     .then(console.log);