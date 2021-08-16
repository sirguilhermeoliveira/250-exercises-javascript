/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = (a) => (a ? true : false);

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);
isTruthy(!true);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(1);
isTruthy(-1);
isTruthy(!0);
isTruthy('0');
isTruthy('a');
isTruthy(true);
isTruthy(!!true);
isTruthy(!false);
isTruthy({});
isTruthy([]);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
  marca: 'Ford',
  modelo: 'X',
  placa: '108-1918',
  ano: 2021,
  cor: 'Amarelo',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (novaCor) => (carro.cor = novaCor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
  return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

*/

carro.adicionarPassageiros = (novosPassageiros) => {
  if (novosPassageiros > 5) {
    console.log(
      'O número de passageiros não pode exceder o número de assentos'
    );
  } else if (
    carro.assentos === 0 ||
    novosPassageiros + carro.quantidadePessoas > carro.assentos
  ) {
    return 'O carro já está lotado!';
  } else if (
    novosPassageiros < 0 &&
    novosPassageiros > carro.quantidadePessoas
  ) {
    return console.log('O carro está vazio!');
  } else {
    carro.quantidadePessoas += novosPassageiros;
  }
  return `Já temos ${carro.quantidadePessoas} ${
    carro.quantidadePessoas === 1 ? ' pessoa ' : ' pessoas '
  } no carro!`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor()); //Amarelo

// Mude a cor do carro para vermelho.

console.log(carro.mudarCor('Vermelho'));

// E agora, qual a cor do carro?

console.log(carro.obterCor()); //Vermelho

// Mude a cor do carro para verde musgo.

console.log(carro.mudarCor('Verde Musgo'));

// E agora, qual a cor do carro?

console.log(carro.obterCor()); //Verde Musgo

// Qual a marca e modelo do carro?

console.log(carro.obterMarca()); //Ford
console.log(carro.obterModelo()); //X

// Adicione 2 pessoas no carro.

console.log(carro.adicionarPassageiros(2)); // 2 pessoas

// Adicione mais 4 pessoas no carro.

console.log(carro.adicionarPassageiros(4)); // O carro não enche, lota

// Faça o carro encher.

console.log(carro.adicionarPassageiros(3)); // 5 pessoas

// Tire 4 pessoas do carro.

console.log(carro.adicionarPassageiros(-4)); // 1 pessoa

// Adicione 10 pessoas no carro.

console.log(carro.adicionarPassageiros(10)); // O número de passageiros não pode ser maior que o de assentos

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas); // 1 pessoa
