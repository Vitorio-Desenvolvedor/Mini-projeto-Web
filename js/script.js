const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const alvo = parseFloat(contador.dataset.target);

    const sufixo = contador.dataset.suffix || "";

    const casasDecimais = parseInt(contador.dataset.decimals) || 0;

    let valorAtual = 0;

    const atualizarContador = () => {

      const incremento = alvo /120;
      valorAtual += incremento;
      
      if(valorAtual < alvo){
        
        contador.innerText =
         valorAtual.toFixed(casasDecimais) + sufixo;

         requestAnimationFrame(atualizarContador);
      } else{

        contador.innerText(casasDecimais) + sufixo;
      }
    };    

  atualizarContador();
});
