const menu = document.querySelector('.menu');
const menu_navegacion = document.querySelector('.menu-navegacion');


menu.addEventListener('click', ()=>{
    menu_navegacion.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu_navegacion.classList.contains('spread') && e.target != menu_navegacion && e.target != menu){
        menu_navegacion.classList.toggle("spread")
    }
})