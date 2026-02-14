// ==========================
// PEGAR ELEMENTOS
// ==========================

let sextoAno = document.querySelector(".sexto-ano");
let setimoAno = document.querySelector(".setimo-ano");
let oitavoAno = document.querySelector(".oitavo-ano");
let nonoAno = document.querySelector(".nono-ano");

let primeiroAno = document.querySelector(".primeiro-ano");
let segundoAno = document.querySelector(".segundo-ano");
let terceiroAno = document.querySelector(".terceiro-ano");

let mensagem = document.getElementById("mensagem");

// ==========================
// FUNÇÃO DE MENSAGEM
// ==========================

function mostrarMensagem(texto) {
  mensagem.innerText = texto;
}

// ==========================
// FUNÇÃO DE CONFIRMAÇÃO
// ==========================

function confirmarAcesso(event, texto) {
  let confirmar = confirm(texto);

  if (!confirmar) {
    event.preventDefault();
  }
}

// ==========================
// EVENTOS
// ==========================

sextoAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 6º ano");
  confirmarAcesso(event, "Deseja abrir o material do 6º ano?");
});

setimoAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 7º ano");
  confirmarAcesso(event, "Deseja abrir o material do 7º ano?");
});

oitavoAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 8º ano");
  confirmarAcesso(event, "Deseja abrir o material do 8º ano?");
});

nonoAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 9º ano");
  confirmarAcesso(event, "Deseja abrir o material do 9º ano?");
});

primeiroAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 1º médio");
  confirmarAcesso(event, "Deseja abrir o material do 1º médio?");
});

segundoAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 2º médio");
  confirmarAcesso(event, "Deseja abrir o material do 2º médio?");
});

terceiroAno.addEventListener("click", function(event) {
  mostrarMensagem("Você escolheu o 3º médio");
  confirmarAcesso(event, "Deseja abrir o material do 3º médio?");
});
