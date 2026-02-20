const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {
  const atualizarContador = () => {
    const alvo = +contador.dataset.target;
    const valorAtual = +contador.innerText;

    const incremento = alvo / 100;

    if (valorAtual < alvo) {
      contador.innerText = Math.ceil(valorAtual + incremento);
      setTimeout(atualizarContador, 20);
    } else {
      contador.innerText = alvo;
    }
  };

  atualizarContador();
});
