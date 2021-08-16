/*
Crie um array com 5 items (tipos variados).
*/

var NewArray = [
  'string',
  1,
  true,
  { nome: 'Guilherme', sobrenome: 'Silva' },
  [1, 2],
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

addItem = (newItem) => {
  NewArray.push(newItem);
  console.log(NewArray);
};
addItem('x');

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem(['abc', false, 200]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é: ' + NewArray[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array criado tem: ${NewArray.length} items`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(
  `O segundo array criado tem: ${NewArray[NewArray.length - 1].length} items`
);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var contadorParWhile = 9;
while (contadorParWhile < 21);
contadorParWhile++;
if (contadorParWhile % 2 === 0) {
  console.log(contadorParWhile);
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var contadorImparWhile = 9;
while (contadorImparWhile < 21);
contadorImparWhile++;
if (contadorImparWhile % 2 !== 0) {
  console.log(contadorImparWhile);
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (var numPar = 100; numPar < 120; numPar++)
  if (numPar % 2 === 0) {
    console.log(numPar);
  }

for (var numImpar = 100; numImpar < 120; numImpar++)
  if (numImpar % 2 !== 0) {
    console.log(numImpar);
  }
