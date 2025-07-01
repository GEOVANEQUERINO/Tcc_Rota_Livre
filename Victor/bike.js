// Carrosel automatico

const swiper = new Swiper('.swiper', {//Inicializa o carerrosel na classe ".swiper" usando a biblioteca swiper
    loop: true, //faz com que as imagens fique se repetindo repetidamente
    autoplay: { //configuração da reprodução automatica do Carrosel
    delay: 2000, // tempo para mudar de slide (2 segundos)
    disableOnInteraction: false, //continua o autoplay mesmo se o usuário interagir (ex: tentar arrastar)
},  
    effect: 'fade',
    fadeEffect: {croosfade: true}, //faz o slide anterior desaparecer de maneira suave enquanto o outro aparece

    allowTouchMove: false, //Impede que o usuário use o toque (arraste) para o slide 

});

// MENU HAMBURGUER


//const toggle = document.getElementById('menu-toggle');
//const menu = document.getElementById('menu');

//toggle.addEventListener('click', () => {
  //menu.classList.toggle('active');
//});
// hamburguerButton
// Aqui adicionamos o evento do click sobre o ícone de hamburguer
hamburgerButton.addEventListener("click", function() {
  mobileMenu.classList.add("flex"); // função que adiciona uma classe (flex). que esta fazendo a nossa caixa DIV visivel, ou seja ficara visivel para todos
});

// criado a função que remove a classe, ou seja ficara invisivel
closeButton.addEventListener("click", function(){
  mobileMenu.classList.remove("flex");
});