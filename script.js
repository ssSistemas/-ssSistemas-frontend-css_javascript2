const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const Ltsbotoes = document.querySelectorAll('button');
const banner = document.querySelector('.app__image');



for (const botao of Ltsbotoes) {
    botao.addEventListener('mouseover', () => {
        botao.classList.add('active');
    });

}

for (const botao of Ltsbotoes) {
    botao.addEventListener('mouseout', () => {
        botao.classList.remove('active');
    });

}


focoBt.addEventListener('click', function () {
    html.setAttribute('data-contexto', 'foco');
    banner.setAttribute('src', 'imagens/foco.png');
});







//A principal diferença prática entre essas duas formas de definir funções está na manipulação do contexto (this). As arrow functions não têm seu próprio this, elas herdam o this do contexto pai no qual foram definidas. As funções regulares têm seu próprio this, que é definido quando a função é chamada.

//No entanto, no seu exemplo específico, a função de callback não faz uso do this, então, na prática, não há diferença funcional entre os dois códigos. Ambos os códigos irão funcionar da mesma maneira. A escolha entre eles muitas vezes se resume à preferência de estilo e à necessidade de manipulação específica do this.

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', 'imagens/descanso-curto.png');

});


longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', 'imagens/descanso-longo.png');
});

