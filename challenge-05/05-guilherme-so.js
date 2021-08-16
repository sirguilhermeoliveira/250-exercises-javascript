/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray(array[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var twoParameters = (a, b) => {
  return a[b];
};

console.log(twoParameters([1, 2, 3], 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrayFive = ['Paola', 5, null, NaN, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(retornaArray(arrayFive[0])); // Paola
console.log(retornaArray(arrayFive[1])); // 5
console.log(retornaArray(arrayFive[2])); // null
console.log(retornaArray(arrayFive[3])); //NaN
console.log(retornaArray(arrayFive[4])); //undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(livroNome) {
  var listaLivros = {
    livro_um: {
      quantidadePaginas: 100,
      autor: 'A',
      editora: 'A',
    },
    livro_dois: {
      quantidadePaginas: 200,
      autor: 'B',
      editora: 'B',
    },
    livro_tres: {
      quantidadePaginas: 300,
      autor: 'C',
      editora: 'C',
    },
  };
  return livroNome === undefined ? listaLivros : listaLivros[livroNome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(
  'O livro livro_um tem' +
    ' ' +
    book('livro_um').quantidadePaginas +
    ' páginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro livro_um tem' + 'é' + book('livro_um').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(
  'O livro livro_um' + ' foi publicado pela editora ' + book('livro_um').editora
);
