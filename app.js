let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Parabéns!");
        let palavraTentativa = tentativas > 1? "Tentativas" : "Tentativa";
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")

    }else{
        if (chute < numeroSecreto){
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);

        } else{
            exibirTextoNaTela ("p",`O número secreto é menor que ${chute}`);
        }
        tentativas ++;
        limparCampo();
        }
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosEscolhidos == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);    
}

