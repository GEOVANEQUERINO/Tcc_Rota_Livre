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

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// CALCULO DE ROTA

function initMap() {
  const mapa = new google.maps.Map(document.getElementById("mapa-rota"), {
    zoom: 7,
    center: { lat: -23.5505, lng: -46.6333 }
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(mapa);

  document.getElementById("btn-rota").addEventListener("click", function (e) {
    e.preventDefault();

    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    if (!origem || !destino) {
      alert("Por favor, preencha ambos os campos.");
      return;
    }

    directionsService.route(
      {
        origin: origem,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING
      },
      function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
        } else {
          alert("Erro ao calcular rota: " + status);
        }
      }
    );
  });
}



