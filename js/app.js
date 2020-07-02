const imagen = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-ligera');
const menu1 = document.querySelector('.menu');

console.log(imagen);
console.log(imagenLight);
console.log(contenedorLight);

imagen.forEach(ima =>{
    ima.addEventListener('click', ()=>{
        aparecerImagen(ima.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !=imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const aparecerImagen = (ima)=>{
    imagenLight.src = ima;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    menu1.style.opacity = '0'
} 