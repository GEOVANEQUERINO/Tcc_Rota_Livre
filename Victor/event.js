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