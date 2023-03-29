let img = document.querySelector('img');
fetch('superman.png')
    .then(resp=>resp.blob())
    .then(imagen => {
        var imgPath = URL.createObjectURL(imagen);
        img.src = imgPath;
    })