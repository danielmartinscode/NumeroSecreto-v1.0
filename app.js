let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Parabéns, você acertou o número Secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O Número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O Número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Gera um número inteiro aleatório entre 1 e numeroLimite
    if (listaDeNumerosSorteados.length == numeroLimite){ // Verifica se todos os números possíveis já foram sorteados
        listaDeNumerosSorteados = []; // Se sim, reinicia a lista de números sorteados
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ // Verifica se o número já foi sorteado
        return GerarNumeroAleatorio(); // Se já foi sorteado, gera um novo número recursivamente
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número à lista de sorteados
        console.log(listaDeNumerosSorteados); // Imprime a lista de números sorteados no console
        return numeroEscolhido; // Retorna o número sorteado
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}