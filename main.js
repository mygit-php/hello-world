let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hue_rotate = document.getElementById('hue-rotate');

//btns
let download = document.getElementById('download');
let uplaod = document.getElementById('uplaod');

let img = document.getElementById('img');
let reset = document.querySelector('span');

let imgBox = document.querySelector('.img-box');
const canvas = document.getElementById('canvas');
const cxt = canvas.getContext('2d');


function resetval(){
    img.style.filter = 'none';
    saturate.value = 100;
contrast.value = 100;
brightness.value = 100;
sepia.value = 0;
grayscale.value = 0;
blur.value = 0;
hue_rotate.value = 0;
}



window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}

uplaod.onchange = function(){
    resetval();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(uplaod.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}





let filters = document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input' , function(){
        cxt.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        cxt.drawImage(img,0,0,canvas.width,canvas.height)
    })
})



download.onclick = function(){
    download.href = canvas.toDataURL();
}
img.onload = function(){
    canvas.width = img.width;
    canvas.height = img.height;
    cxt.drawImage(img,0,0,canvas.width,canvas.height)
   img.style.display = 'none';
}