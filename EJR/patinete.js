const swiper = new Swiper('.swiper', {//Inicializa o carerrosel na classe ".swiper" usando a biblioteca swiper
    loop: true, //faz com que as imagens fique se repetindo repetidamente
    autoplay: { //configuração da reprodução automatica do Carrosel
    delay: 2000, // tempo para mudar de slide (2 segundos)
    disableOnInteraction: false, //continua o autoplay mesmo se o usuário interagir (ex: tentar arrastar)
},  
    effect: 'fade',
    fadeEffect: {croosFade: true}, //faz o slide anterior desaparecer de maneira suave enquanto o outro aparece

    allowTouchMove: false, //Impede que o usuário use o toque (arraste) para o slide 

});
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});