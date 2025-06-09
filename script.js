// criamos um objeto chamado options com as configurações para o efeito de digitação

const options = {
    strings: [
        "Chegue mais rápido,",
        "Chegue melhor."
    ],

    typeSpeed:60, //velocidade da digitação em milisegundos por caractere

    backSpeed:40, //velocidade ao apagar o texto

    loop: true, //faz com que as frases se repita indefinidamente

    backDelay: 1500, //tempo de espera (milisegundos) antes de começar a apagar uma frase

    smartBackspace: true //otimiza o apagamneto apaga apenas os caracteres diferentes da proxima frase
};

// cria uma nova estancia do Typed.js
//#Typed é o seletor do elemento HTML onde o texto sera digitado
//options é o objeto com as configurações acima

new Typed("#typed", options);