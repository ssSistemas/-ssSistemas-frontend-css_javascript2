const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const Ltsbotoes = document.querySelectorAll('button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBT = document.querySelector('#start-pause');
const iniciarOuPausarBT = document.querySelector('#start-pause span');
const divTimer = document.querySelector('#timer');

let intervaloID = null;
let tempoDecorrido = 10;
var contextoAtual = 'foco';

const musica = new Audio('sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('sons/play.wav');
const audioPause = new Audio('sons/pause.mp3');
const audioBeep = new Audio('sons/beep.mp3');

musica.loop = true;
audioBeep.loop = true;





musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }

})





/* for (const botao of Ltsbotoes) {
    botao.addEventListener('mouseover', () => {
        botao.classList.add('active');
    });

}

for (const botao of Ltsbotoes) {
    botao.addEventListener('mouseout', () => {
        botao.classList.remove('active');
    });

}
 */

focoBt.classList.add('active');

function desfocar() {
    for (const botao of Ltsbotoes) {

        botao.classList.remove('active');


    }
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


function alterarContexto(contexto) {

    if (intervaloID != null) {
        alertar();
        return;
    }


    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            desfocar();
            focoBt.classList.add('active');
            contextoAtual = 'foco';
            reiniciarTempoContexto();

            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            desfocar();
            curtoBt.classList.add('active');

            contextoAtual = 'descanso-curto';
            reiniciarTempoContexto();
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            desfocar();
            longoBt.classList.add('active');

            contextoAtual = 'descanso-longo';
            reiniciarTempoContexto();
            break;
        default:
            break;
    }
    zerar('Começar');
    mostraTempo();

}


const contagemRegressiva = function () {

    if (tempoDecorrido == 0) {
        clearInterval(intervaloID);

        reiniciarTempoContexto();

        musicaFocoInput.checked = false;
        musica.pause();
        audioBeep.play();


        setTimeout(() => {
            zerar('Começar');
        }, 3000);

        setTimeout(() => {
            mostraTempo();
        }, 3000);



        return;

    }
    tempoDecorrido -= 1;
    mostraTempo();

}


startPauseBT.addEventListener('click', iniciar);

function iniciar() {
    if (intervaloID == null) {

        intervaloID = setInterval(contagemRegressiva, 1000);
        audioBeep.pause();
        audioPlay.play();
        iniciarOuPausarBT.innerHTML = "Pausar";
    } else {

        audioBeep.pause();
        audioPause.play();

        zerar('Continuar');

    }
}

function zerar(estado) {
    audioBeep.pause();
    clearInterval(intervaloID);
    intervaloID = null;
    iniciarOuPausarBT.textContent = estado;

}

function mostraTempo() {
    divTimer.innerHTML = `${tempoDecorrido}`
}


function reiniciarTempoContexto() {

    switch (contextoAtual) {
        case "foco":

            tempoDecorrido = 10;
            break;
        case 'descanso-curto':

            tempoDecorrido = 3;

            break;
        case 'descanso-longo':

            tempoDecorrido = 25;

            break;
        default:
            break;
    }
}

function normalizar() {
    startPauseBT.classList.remove('attention');
}

function alertar() {
    startPauseBT.classList.add('attention');
    audioPause.play();
    setTimeout(() => {
        normalizar();
    }, 1000);
}



mostraTempo();