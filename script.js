const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const Ltsbotoes = document.querySelectorAll('button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBT = document.querySelector('#start-pause');

let intervaloID = null;
let tempoDecorrido = 5;

const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop=true;


musicaFocoInput.addEventListener('change',()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
    
})





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
    alterarContexto('foco');
    //html.setAttribute('data-contexto', 'foco');
    //banner.setAttribute('src', 'imagens/foco.png');
});







//A principal diferença prática entre essas duas formas de definir funções está na manipulação do contexto (this). As arrow functions não têm seu próprio this, elas herdam o this do contexto pai no qual foram definidas. As funções regulares têm seu próprio this, que é definido quando a função é chamada.

//No entanto, no seu exemplo específico, a função de callback não faz uso do this, então, na prática, não há diferença funcional entre os dois códigos. Ambos os códigos irão funcionar da mesma maneira. A escolha entre eles muitas vezes se resume à preferência de estilo e à necessidade de manipulação específica do this.

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    //html.setAttribute('data-contexto', 'descanso-curto');
    //banner.setAttribute('src', 'imagens/descanso-curto.png');

});


longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    //html.setAttribute('data-contexto', 'descanso-longo');
    //banner.setAttribute('src', 'imagens/descanso-longo.png');
});


function alterarContexto(contexto){
    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src',`imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;

            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;           

            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;           

            break;    
        default:
            break;
    }
        
}


const contagemRegressiva = function(){
    
    tempoDecorrido -=1;
    console.log("Temporizador:" + tempoDecorrido);
    
}


startPauseBT.addEventListener('click',iniciar);

function iniciar(){
    if (intervaloID==null){ 
        intervaloID = setInterval(contagemRegressiva,1000);
    }else{
        clearInterval={intervaloID};
        intervaloID=null;

    }
}