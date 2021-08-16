(function (DOM) {
  'use strict';

  /*
    Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
    salvando-os temporariamente na memória de um servidor.
    Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
    que possamos utilizar para salvar as informações dos nossos carros.
    Para utilizá-lo, você vai precisar fazer o seguinte:
    - Via terminal, acesse o diretório `server`;
    - execute o comando `npm install` para instalar as dependências;
    - execute `node app.js` para iniciar o servidor.
    Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
    `http://localhost:3000`
    O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
    As mudanças que você irá precisar fazer no seu projeto são:
    - Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
    `http://localhost:3000/car`
    - Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
    os seguintes campos:
      - `image` com a URL da imagem do carro;
      - `brandModel`, com a marca e modelo do carro;
      - `year`, com o ano do carro;
      - `plate`, com a placa do carro;
      - `color`, com a cor do carro.
    Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.
    Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
    do pull request.
    */

  console.log('https://github.com/mizaelucas/jsninja-challenge30/pull/2');

  var app = (function () {
    return {
      init: function () {
        this.companyInfo();
        this.initEvents();
        this.getCars();
      },

      initEvents: function initEvents() {
        DOM('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        app.postCars();
        console.log('Submitted!');

        var $tableCar = DOM('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
        var tableEl = document.querySelector('table');
        tableEl.addEventListener('click', app.deleteRow);
      },

      createNewCar: function createNewCar() {
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $removeButton = document.createElement('button');
        var $tdImage = document.createElement('td');
        var $image = document.createElement('img');
        var $tdBrand = document.createElement('td');
        var $tdYear = document.createElement('td');
        var $tdPlate = document.createElement('td');
        var $tdColor = document.createElement('td');

        $removeButton.className = 'removeBtn';

        $image.setAttribute('src', DOM('[data-js="image"]').get().value);
        $tdImage.appendChild($image);

        $tdBrand.textContent = DOM('[data-js="brand-model"]').get().value;
        $tdYear.textContent = DOM('[data-js="year"]').get().value;
        $tdPlate.textContent = DOM('[data-js="plate"]').get().value;
        $tdColor.textContent = DOM('[data-js="color"]').get().value;
        $removeButton.textContent = 'Remover';

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);
        $tr.appendChild($removeButton);

        return $fragment.appendChild($tr);
      },

      deleteRow: function deleteRow(e) {
        if (!e.target.classList.contains('removeBtn')) {
          return;
        }

        var btn = e.target;
        btn.closest('tr').remove();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', './company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCars: function getCars() {
        var $tableBody = DOM('[data-js="table-car"]').get();
        var $fragment = document.createDocumentFragment();
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:3000/car');
        ajax.send();
        ajax.onreadystatechange = function () {
          if (ajax.readyState === 4 && this.status === 200) {
            Array.prototype.forEach.call(
              JSON.parse(ajax.responseText),
              (obj) => {
                $fragment.appendChild(app.createNewCar(obj));
              }
            );
            $tableBody.appendChild($fragment);
          }
        };
      },

      postCars: function postCars() {
        var ajax = new XMLHttpRequest();
        var car = {
          image: DOM('[data-js="image"]').get().value,
          brandModel: DOM('[data-js="brand-model"]').get().value,
          year: DOM('[data-js="year"]').get().value,
          plate: DOM('[data-js="plate"]').get().value,
          color: DOM('[data-js="color"]').get().value,
        };
        ajax.open('POST', 'http://localhost:3000/car');
        ajax.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded'
        );
        ajax.send(
          `image=${car.image}&brandModel=${car.brandModel}&year=${car.year}&plate=${car.plate}&color=${car.color}`
        );
        window.location.reload();
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady.call(this)) return;

        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="company-name"]').get();
        var $companyPhone = new DOM('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
    };
  })();

  app.init();
})(window.DOM);
