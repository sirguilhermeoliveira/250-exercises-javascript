(function (win, doc) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D
  
  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories
  
  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */
  const $mousemove = document.querySelector('[data-event="mousemove"]');
  const $dblclick = document.querySelector('[data-event="dblclick"]');
  const $keydown = document.querySelector('[data-event="keydown"]');
  const $keyup = document.querySelector('[data-event="keyup"]');

  $div.addEventListener('mousemove', (event) => {
    $mousemove.textContent = ` Mouse position: {
          X: ${event.clientX},
          Y: ${event.clientY},
      }`;
  });
  $div.addEventListener('dblclick', (event) => {
    $dblclick.textContent = 'Double cliked';
  });
  $inputDown.addEventListener('keydown', (event) => {
    $keydown.textContent = `Input down: ${event.target.value}`;
  });
  $inputUp.addEventListener('keyup', (event) => {
    $keyup.textContent = `Input up: ${event.target.value}`;
  });
})(window, document);
