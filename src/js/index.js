
const { botoesCarrossel, informacoes, imagens } = pegarElementosDoHtml();

//- 2 - dar um jeito de identificar o clique do usuário no botão
    botoesCarrossel.forEach((botao, indice) => { 
    botao.addEventListener('click', () => {


        desativarBotaoSelecionado();


        marcarBotaoSelecionado(botao);


        esconderImagemAtiva();


        mostrarImagemDeFundo(indice);


        escondendoInformacoesAtivas();


        mostrarInformacoes(indice);


    });
});





function pegarElementosDoHtml() {
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');
    const informacoes = document.querySelectorAll('.informacoes');
    return { botoesCarrossel, informacoes, imagens };
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add('ativa');
}

function escondendoInformacoesAtivas() {
    const informacaoAtiva = document.querySelector('.informacoes.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

