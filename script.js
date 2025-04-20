const estados = {
  1: 0,
  2: 0,
  3: 0
};

const legendas3 = [
  "Ação social na Clínica Sorrisus 02.10.2021",
  "Dia das crianças com saúde bucal: avaliação odontológica.",
  "Procedimentos clínicos e aprendizado sobre higiene bucal.",
  "Kit de limpeza com escova, pasta e fio dental + lanche feliz do McDonald's!"
];

document.addEventListener("DOMContentLoaded", () => {
  for (let id = 1; id <= 3; id++) {
    const carrossel = document.querySelector(`.carrossel[data-id="${id}"]`);
    const imagens = carrossel.querySelectorAll("img:not(.seta)");

    const containerIndicadores = document.createElement("div");
    containerIndicadores.classList.add("indicadores");
    carrossel.appendChild(containerIndicadores);

    imagens.forEach((_, index) => {
      const indicador = document.createElement("span");
      indicador.classList.add("indicador");
      if (index === 0) indicador.classList.add("ativo");
      indicador.addEventListener("click", () => mudarParaImagem(id, index));
      containerIndicadores.appendChild(indicador);
    });
  }

  // Inicializar legenda do carrossel 3
  const legenda = document.getElementById("legenda-3");
  if (legenda) {
    legenda.textContent = legendas3[0];
  }
});

function mudarImagem(id, direcao) {
  const carrossel = document.querySelector(`.carrossel[data-id="${id}"]`);
  const imagens = carrossel.querySelectorAll("img:not(.seta)");
  const indicadores = carrossel.querySelectorAll(".indicador");

  imagens[estados[id]].classList.remove("active");
  indicadores[estados[id]].classList.remove("ativo");

  estados[id] = (estados[id] + direcao + imagens.length) % imagens.length;

  imagens[estados[id]].classList.add("active");
  indicadores[estados[id]].classList.add("ativo");

  if (id === 3) {
    const legenda = document.getElementById("legenda-3");
    legenda.textContent = legendas3[estados[id]] || "";
  }
}

function mudarParaImagem(id, novaIndex) {
  const carrossel = document.querySelector(`.carrossel[data-id="${id}"]`);
  const imagens = carrossel.querySelectorAll("img:not(.seta)");
  const indicadores = carrossel.querySelectorAll(".indicador");

  imagens[estados[id]].classList.remove("active");
  indicadores[estados[id]].classList.remove("ativo");

  estados[id] = novaIndex;

  imagens[novaIndex].classList.add("active");
  indicadores[novaIndex].classList.add("ativo");

  if (id === 3) {
    const legenda = document.getElementById("legenda-3");
    legenda.textContent = legendas3[novaIndex] || "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".carrosselgigantinhos");
  const imagens = carrossel.querySelectorAll("img");
  let indiceAtual = 0;
  const intervalo = 1000; // tempo em ms entre trocas

  function mostrarImagem(index) {
    imagens.forEach((img, i) => {
      if (i === index) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  }

  function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
  }

  mostrarImagem(indiceAtual); // exibir a primeira ao carregar
  setInterval(proximaImagem, intervalo); // troca automática
});
