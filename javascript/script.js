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
  console.log(parametro)
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true
  }
}
parametros.forEach(ativarProduto)