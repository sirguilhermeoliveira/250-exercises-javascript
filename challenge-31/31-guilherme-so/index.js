(function (DOM) {
  'use strict';

  /*
      Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
      coluna na tabela, com um botão de remover.
      Ao clicar nesse botão, a linha da tabela deve ser removida.
      Faça um pull request no seu repositório, na branch `challenge-31`, e cole
      o link do pull request no `console.log` abaixo.
      Faça um pull request, também com a branch `challenge-31`, mas no repositório
      do curso, para colar o link do pull request do seu repo.
      */

  console.log(
    'Link do seu projeto no seu github de forma privada, adicionando anilton.veigaa@gmail.com'
  );

  var app = (function () {
    return {
      init: function () {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        DOM('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
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
        console.log('COMPANY INFO', this);
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
