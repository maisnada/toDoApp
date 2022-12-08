"use strict";

const atividade = document.querySelector("#atividade");

const data = document.querySelector("#data");

const horario = document.querySelector("#horario");

const btnSalvar = document.querySelector("#salvar");

const listaDeAtividades = document.querySelector(".lista");

btnSalvar.addEventListener("click", handleSalvar);

function handleSalvar() {
  let descricaoAtividade = atividade.value;

  let dataAtividade = data.value ? data.value : definirDataAtual();

  let horarioAtividade = horario.value ? horario.value : definirhorarioAtual();

  let item = criarItem(
    `${formatarData(
      dataAtividade
    )} | ${horarioAtividade} | ${descricaoAtividade}`
  );

  listaDeAtividades.appendChild(item);
}

function criarItem(conteudo) {
  let item = document.createElement("li");

  item.innerText = conteudo.trim();

  item.classList.add("list-group-item", "item");

  return item;
}

function definirDataAtual() {
  let dataAtual = new Date();

  let dia = String(dataAtual.getDate()).padStart(2, "0");
  let mes = dataAtual.getMonth() + 1;
  let ano = dataAtual.getFullYear();

  console.log("6".padStart(2, "0"));

  data.value = `${ano}-${mes}-${dia}`;
}

function formatarData(data) {
  let dataArr = data.split("-");

  return `${dataArr[2]}/${dataArr[1]}`;
}

function definirhorarioAtual() {
  let dataAtual = new Date();

  let hora = String(dataAtual.getHours()).padStart(2, "0");
  let minutos = String(dataAtual.getMinutes()).padStart(2, "0");

  return `${hora}h${minutos}`;
}
