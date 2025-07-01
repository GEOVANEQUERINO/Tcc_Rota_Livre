
// HEADER

// MENU HAMBURGUER

//const toggle = document.getElementById('menu-toggle');
//const menu = document.getElementById('menu');

//toggle.addEventListener('click', () => {
  //menu.classList.toggle('active');
//});





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

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector("#typing");
    const h2 = document.getElementById('typed-h2');
    const p = document.getElementById('typed-p');
    let typedH2 = null;
    let typedP = null;
    let hasTyped = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h2.classList.add("visible");
                p.classList.add("visible");
                h2.classList.remove("hidden");
                p.classList.remove("hidden");

                if (!hasTyped) {
                    typedH2 = new Typed("#typed-h2", {
                        strings: ["Você quer se divertir e não sabe?"],
                        typeSpeed: 50,
                        showCursor: true,
                        cursorChar: "",
                        loop: false,
                        onComplete: () => {
                            typedP = new Typed("#typed-p", {
                                strings: ["conheça lugares para se divertir em quatro rodas"],
                                typeSpeed: 25,
                                showCursor: false,
                                loop: false,
                            });
                        }
                    });

                    hasTyped = true;
                }
            } else {
                h2.classList.remove("visible");
                p.classList.remove("visible");
                h2.classList.add("hidden");
                p.classList.add("hidden");

                if (typedH2) typedH2.destroy();
                if (typedP) typedP.destroy();

                h2.textContent = "";
                p.textContent = "";

                typedH2 = null;
                typedP = null;
                hasTyped = false;
            }
        });
    }, {
        threshold: 0.6
    });

    observer.observe(section);
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
