
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database',1);

// Se actualiza cuando se c ra o se sube de version de la DB
request.onupgradeneeded = event => {

    console.log('Actualizacion de BD');
    let db = event.target.result;

    db.createObjectStore('heroes',{
        keyPath:'id'
    })
};

//Manejo de errores

request.onerror = event=>{
    console.log('DB error:', event.target.error);
}


request.onsuccess = event=>{
    let db =event.target.result;

    let heroesData = [
        { id: '11', target: 'Spiderman', mensaje: 'Aqui su vecino Spiderman'},
        { id: '12', target: 'Deadpool', mensaje: 'The merc with the mouth!!'}
    ]

    let heroesTransaction = db.transaction('heroes','readwrite');

    heroesTransaction.onerror = event => {
        console.log('Error guardando',event.target.error);
    }
    heroesTransaction.oncomplete = event => {
        console.log('Transaccion hecha',event);
    }
    let heroesStore = heroesTransaction.objectStore('heroes');

    for(let heroe of heroesData){
        heroesStore.add(heroe);
    }

    heroesStore.onsuccess = event => {
        console.log('Nuevo item agregado a la BD');
    }

}