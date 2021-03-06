(function (win, doc) {
  'use strict';
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
  var $screen = doc.querySelector('[data-js="screen"]');
  var $numbers = doc.querySelectorAll('[data-js="numbers"]');
  var $operations = doc.querySelectorAll('[data-js="operations"]');

  var $operationsCE = doc.querySelector('[data-js="CE"]');
  var $operationsEquals = doc.querySelector('[data-js="equal"]');

  Array.prototype.forEach.call($numbers, function (button) {
    button.addEventListener('click', handleClickNumber, false);
  });

  Array.prototype.forEach.call($operations, function (button) {
    button.addEventListener('click', handleClickOperation, false);
  });

  $operationsCE.addEventListener('click', handleClickCE);
  $operationsEquals.addEventListener('click', handleClickEqual);

  function handleClickCE(event) {
    $screen.value = 0;
  }

  function handleClickNumber(event) {
    $screen.value += this.value;
  }

  function handleClickEqual(event) {
    $screen.value = removeLastOperation($screen.value);
    var values = $screen.value.match(/\d+[+*÷-]?/g);
    $screen.value = values.reduce(function (accu, atual) {
      var firstValue = accu.slice(0, -1);
      var operator = accu.split('').pop();
      var lastValue = removeLastOperation(atual);
      var lastOperator = isLastItemAnOperator(atual)
        ? atual.split('').pop()
        : '';
      switch (operator) {
        case '+':
          return Number(firstValue) + Number(lastValue) + lastOperator;
        case '-':
          return Number(firstValue) - Number(lastValue) + lastOperator;
        case '*':
          return Number(firstValue) * Number(lastValue) + lastOperator;
        case '÷':
          return Number(firstValue) / Number(lastValue) + lastOperator;
      }
    });
  }

  function removeLastOperation(item) {
    if (isLastItemAnOperator(item)) return item.slice(0, -1);
    return item;
  }

  function handleClickOperation(event) {
    $screen.value = removeLastOperation($screen.value);
    $screen.value += this.value;
  }

  function isLastItemAnOperator(item) {
    var operation = ['+', '-', '*', '÷'];
    var lastItem = item.split('').pop();
    return operation.some(function (operator) {
      return operator === lastItem;
    });
  }
})(window, document);
