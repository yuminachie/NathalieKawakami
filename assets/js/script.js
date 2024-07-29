//faz o menu aparecer após clicar no hamburguer
document.querySelector('.menu-opener').addEventListener('click', ()=>{
    let nav=document.querySelector('header nav');
    nav.classList.toggle('opened');
});