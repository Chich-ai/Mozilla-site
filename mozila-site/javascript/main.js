const leia = document.querySelector("h1");
leia.textContent = "olá mundo";

/*let nomePessoa = "Fernando";
console.log(nomePessoa);
nomePessoa = "Belini";
console.log(nomePessoa);

let tipoDeDoce = "chocolate";
if(tipoDeDoce == "chocolate"){
    alert("Sim, é igual a chocolate");
} else {
    alert("Não, está errado, o doce é " + tipoDeDoce)
}

let alerta = document.querySelector("h1");
alert("Processa o alerta");
*/

/*multiplicação
function multiply(valor1, valor2){
    let resultado = valor1 * valor2;
    return resultado;
}

console.log (multiply(2, 5));

function divisao(valor1, valor2){
    let resultado = valor1 / valor2;
    return resultado;
}

console.log (divisao(2, 5));

document.querySelector("html")
.addEventListener("click", function(){
    alert("Opa, você acabou de clicar na tela!");
});*/

//manipulando a imagem da página
let imagem = document.querySelector('img');

imagem.onclick = function(){
    let imagemAtual = imagem.getAttribute('src');
    if(imagemAtual == 'images/firefox-icon.png'){
        imagem.setAttribute('src', 'images/firefox2.png');
    } else {
        imagem.setAttribute('src', 'images/firefox-icon.png');
    }
}

//manipulando o nome do usuário
let novoTitulo = document.querySelector('h1')
let nomePessoa = document.querySelector('button')
function setaNomePessoaNaTela(){
    let meuNome = prompt('Por favor digite seu nome')
    if(!meuNome){
        setaNomePessoaNaTela
    } else {
        localStorage.setItem('name', meuNome)
        novoTitulo.innerHTML = 'Mozilla é legal, ' + meuNome
    }
}

if(!localStorage.getItem('name')) {
    setaNomePessoaNaTela
} else {
    let storageName = localStorage.getItem('name')
    novoTitulo.innerHTML = 'Mozilla é legal, ' + storageName
}

nomePessoa.onclick = function() {
    setaNomePessoaNaTela()
}