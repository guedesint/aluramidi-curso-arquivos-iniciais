function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor invalido');
    }

}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//para 
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string, idAudio esta criando e puxando um parametro do minha classList e retornando id completo de cada audio 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }

    }


}