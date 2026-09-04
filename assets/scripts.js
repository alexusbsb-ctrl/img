const postsW7Busca = [{"titulo":"PC GAMER INTEL CORE I5","slug":"pc-gamer-intel-core-i5","categoria":"Eletronicos","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/PC_Gamer.png","data":"09/03/2026","resumo":"PC GAMER INTEL CORE I5 Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garantid...","textoBusca":"PC GAMER INTEL CORE I5 Eletronicos PC GAMER INTEL CORE I5 Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garantid... <b>PC GAMER INTEL CORE I5</b><p>Marca: Glacon</p><p>Características: Um produto de qualidade superior</p><p>com especificações técnicas de fácil entendimento</p><p>Garantia, Nota Fiscal e entrega garantidas por ML</p>"},{"titulo":"Iphone 17 Pro Max Ultra","slug":"iphone-17-pro-max-ultra","categoria":"Suplementos","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/iphone.png","data":"09/02/2026","resumo":"Iphone 17 Pro Max Ultra Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garanti...","textoBusca":"Iphone 17 Pro Max Ultra Suplementos Iphone 17 Pro Max Ultra Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garanti... <b>Iphone 17 Pro Max Ultra</b><br><p>Marca: Glacon</p><p>Características: Um produto de qualidade superior</p><p>com especificações técnicas de fácil entendimento</p><p>Garantia, Nota Fiscal e entrega garantidas por ML</p>"},{"titulo":"Caixa de Som Umega Prime","slug":"caixa-de-som-umega-prime","categoria":"Eletronicos","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Caixa_Som.png","data":"09/01/2026","resumo":"Caixa de Som Umega Prime Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garant...","textoBusca":"Caixa de Som Umega Prime Eletronicos Caixa de Som Umega Prime Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garant... <b>Caixa de Som Umega Prime</b><br><p>Marca: Glacon</p><p>Características: Um produto de qualidade superior</p><p>com especificações técnicas de fácil entendimento</p><p>Garantia, Nota Fiscal e entrega garantidas por ML</p>"},{"titulo":"HeadSet Prime Scribus Fonts","slug":"headset-prime-scribus-fonts","categoria":"Utilidades","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Headset.png","data":"31/08/2026 00:00","resumo":"HeadSet Prime Scribus Fonts Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega gar...","textoBusca":"HeadSet Prime Scribus Fonts Utilidades HeadSet Prime Scribus Fonts Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega gar... <b>HeadSet Prime Scribus Fonts</b><br><p>Marca: Glacon</p><p>Características: Um produto de qualidade superior</p><p>com especificações técnicas de fácil entendimento</p><p>Garantia, Nota Fiscal e entrega garantidas por ML</p>"},{"titulo":"Playstation 5 Online","slug":"playstation-5-online","categoria":"Papelaria","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Playstation.png","data":"30/08/2026 00:00","resumo":"Playstation 5 Online Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garantidas...","textoBusca":"Playstation 5 Online Papelaria Playstation 5 Online Marca: Glacon Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garantidas... <b>Playstation 5 Online</b><br><p>Marca: Glacon</p><p>Características: Um produto de qualidade superior</p><p>com especificações técnicas de fácil entendimento</p><p>Garantia, Nota Fiscal e entrega garantidas por ML</p>"}];
;
"use strict";
const formularioBusca = document.getElementById("formBusca");
const campoBusca = document.getElementById("campoBusca");
const resultadoBusca = document.getElementById("resultadoBusca");
function normalizarTextoBusca(texto) {
  return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function escaparBusca(texto) {
  return String(texto == null ? "" : texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function executarBusca(consulta) {
  const termo = normalizarTextoBusca(consulta);
  if (!termo) { mostrarEstadoBusca("Digite algo para pesquisar."); return; }
  const palavras = termo.split(/\s+/).filter(Boolean);
  const resultados = postsW7Busca.filter(function(post) {
    const texto = normalizarTextoBusca(post.textoBusca);
    return palavras.every(function(palavra) { return texto.indexOf(palavra) !== -1; });
  });
  renderizarResultadosBusca(resultados, consulta);
}
function renderizarResultadosBusca(resultados, consulta) {
  if (!resultados.length) {
    resultadoBusca.innerHTML = "<div class=\"empty-posts\"><p>Nenhuma notícia encontrada para <strong>\"" + escaparBusca(consulta) + "\"</strong>.</p></div>";
    return;
  }
  let html = "";
  html += "<div class=\"search-results-header\"><strong>" + resultados.length + (resultados.length === 1 ? " resultado" : " resultados") + "</strong></div>";
  html += "<div class=\"posts-list search-posts-list\">";
  resultados.forEach(function(post) {
    const url = "/posts/" + encodeURIComponent(post.slug) + ".html";
    html += "<article class=\"post-card search-post-card\">";
    if (post.imagem) {
      html += "<a href=\"" + escaparBusca(url) + "\" class=\"post-card-image\">";
      html += "<img src=\"" + escaparBusca(post.imagem) + "\" alt=\"" + escaparBusca(post.titulo) + "\" loading=\"lazy\" decoding=\"async\">";
      html += "</a>";
    }
    html += "<div class=\"post-card-body\">";
    html += "<div class=\"post-card-category\">" + escaparBusca(post.categoria) + "</div>";
    html += "<h2 class=\"post-card-title\"><a href=\"" + escaparBusca(url) + "\">" + escaparBusca(post.titulo) + "</a></h2>";
    if (post.resumo) html += "<p class=\"search-result-summary\">" + escaparBusca(post.resumo) + "</p>";
    if (post.data) html += "<div class=\"post-card-date\">" + escaparBusca(post.data) + "</div>";
    html += "</div></article>";
  });
  html += "</div>";
  resultadoBusca.innerHTML = html;
}
function mostrarEstadoBusca(mensagem) {
  resultadoBusca.innerHTML = "<div class=\"empty-posts\"><p>" + escaparBusca(mensagem) + "</p></div>";
}
formularioBusca.addEventListener("submit", function(event) {
  event.preventDefault();
  const consulta = campoBusca.value.trim();
  executarBusca(consulta);
  if (consulta) {
    const novaUrl = new URL(window.location.href);
    novaUrl.searchParams.set("q", consulta);
    window.history.replaceState({}, "", novaUrl.toString());
  }
});
function carregarBuscaInicial() {
  const parametros = new URLSearchParams(window.location.search);
  const consulta = parametros.get("q") || "";
  if (consulta) { campoBusca.value = consulta; executarBusca(consulta); }
  else { mostrarEstadoBusca("Digite uma palavra ou frase para encontrar notícias."); }
}
carregarBuscaInicial();