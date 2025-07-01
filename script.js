// Typed.js
const options = {
  strings: ["Chegue mais rápido,", "Chegue melhor."],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  backDelay: 1500,
  smartBackspace: true
};
new Typed("#typed", options);


// Carrossel
// Swiper.js
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: { crossFade: true },
  allowTouchMove: true
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

// CALCULO DE ROTA

let map;
let directionsService;
let directionsRenderer;

function initMap() {
  // Cria o mapa centralizado em São Paulo
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: -23.5505, lng: -46.6333 }, // São Paulo como exemplo
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  // Aguarda DOM carregar
  window.addEventListener("load", () => {
    const origemInput = document.getElementById("origem");
    const destinoInput = document.getElementById("destino");
    const botao = document.querySelector(".btn");

    if (!origemInput || !destinoInput || !botao) {
      console.error("Inputs ou botão não encontrados.");
      return;
    }

    botao.addEventListener("click", (e) => {
      e.preventDefault();

      const origem = origemInput.value;
      const destino = destinoInput.value;

      if (!origem || !destino) {
        alert("Por favor, preencha os dois campos.");
        return;
      }

      calcularERenderizarRota(origem, destino);
    });
  });
}

function calcularERenderizarRota(origem, destino) {
  const request = {
    origin: origem,
    destination: destino,
    travelMode: google.maps.TravelMode.DRIVING, // pode trocar por 'caminhada', 'bicicleta', etc
  };

  directionsService.route(request, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    } else {
      alert("Não foi possível calcular a rota: " + status);
      console.error(status);
    }
  });
}

// SCROLL REVEAL

window.revelar = ScrollReveal({reset:true});

revelar.reveal('.card', {
  duration: 2000,
  distance: '90px',
  origin: 'left'
});

revelar.reveal('.social-links', {
  duration: 2000,
  distance: '90px',
  origin: 'right'
});

// LISTA MOVA-SE

 fetch('./eventos.json')
      .then(res => res.json())
      .then(eventos => {
        const container = document.getElementById('lista-eventos');
        eventos.forEach(evento => {
          const div = document.createElement('div');
          div.className = 'evento';
          div.innerHTML = `
            <img src="${evento.imagem}" alt="${evento.nome}">
            <div class="evento-info">
              <h2>${evento.nome}</h2>
              <p><strong>Local:</strong> ${evento.local}</p>
              <p><strong>Data e Hora:</strong> ${new Date(evento.dataHora).toLocaleString('pt-BR')}</p>
            </div>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => {
        document.getElementById('lista-eventos').innerHTML = '<p>Erro ao carregar eventos.</p>';
        console.error('Erro:', err);
      });