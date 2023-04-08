class Camara {
    constructor(videoNode){
        this.videoNode= videoNode;
        console.log('Camara class inicializada')
    }
    encender(){
        navigator.mediaDevices.getDisplayMedia({
            audio:false,
            video:{
                width:300,height:300
            }
        }).then(stream=>{
            this.videoNode.srcObject = stream;
            this.stream = stream;
        });
    }
    apagar(){
        this.videoNode.pause();
        this.stream?.getTracks()[0].stop();
    }
    tomarFoto(){
        //Crear un elemento canvas para renderizar ahi la foto
        let canvas = document.createElement('canvas');
        //Colocar las dimensiones igual al elemento del video
        canvas.setAttribute('width',300);
        canvas.setAttribute('height',300);
        //Obtener el contexto de canvas
        //imagen simple
        let context = canvas.getContext('2d');
        //Dibujar la imagen dentro del canvas
        context.drawImage(this.videoNode,0,0,canvas.width,canvas.height);

        this.foto = context.canvas.toDataURL();

        //limpieza
        canvas = null;
        context = null;

        return this.foto;
    }
}