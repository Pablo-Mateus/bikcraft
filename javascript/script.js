//Ativar links menu
const nav = document.querySelectorAll(".header-menu li a");

function ativarlink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

nav.forEach(ativarlink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  console.log(parametro);
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function expandirPergunta(event) {
  const item = event.currentTarget;
  const controls = item.getAttribute("aria-controls");
  const dd = document.getElementById(controls);
  dd.classList.toggle("ativa");
  const ativa = dd.classList.contains("ativa");
  console.log(ativa);
  item.setAttribute("aria-expanded", ativa);
}

function foiClicado(item) {
  item.addEventListener("click", expandirPergunta);
}
perguntas.forEach(foiClicado);

//galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const principal = document.querySelector("#principal");

function mudarPrincipal(event) {
  const img = event.currentTarget;
  const url = img.src;
  principal.src = url;
}

function cliqueImagem(imagem) {
  imagem.addEventListener("click", mudarPrincipal);
}
console.log(principal);
galeria.forEach(cliqueImagem);
