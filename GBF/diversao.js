//carrossel automatico sem botao nem 

const swiper = new Swiper('.swiper', {
    //
    loop: true,
    autoplay: {//
        delay: 3000,//
        disableoninteraction: false,//
    },

    effect: 'fade',//Define o tipo de treanisçao entre as imagem (fade = dissolver)
    fadeEffect: { crossFade: true },// Faz com que o slide anterior desaparça suavamento enquanto o novo aparece
    allowTouchMove: true//Impede que o usuario 
});