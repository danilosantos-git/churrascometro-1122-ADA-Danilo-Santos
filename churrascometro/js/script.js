document.addEventListener('DOMContentLoaded', function () {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const nextStepBtn = document.getElementById('nextStep');
  const calculateBtn = document.getElementById('calculate');

  calculateBtn.addEventListener('click', function () {
    if (validateStep1()) {
      step1.style.display = 'none';
      step2.style.display = 'block';
    }
  });

  nextStepBtn.addEventListener('click', function () {
    if (validateStep2()) {
      step2.style.display = 'none';
      step3.style.display = 'block';
      displayResults();
    }
  });

  function validateStep1() {
    const homens = document.getElementById('homens').value;
    const mulheres = document.getElementById('mulheres').value;
    const criancas = document.getElementById('criancas').value;
    const alcool = document.getElementById('alcool').value;

    if (homens === '' || mulheres === '' || criancas === '' || alcool === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    return true;
  }

  function validateStep2() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;

    if (nome === '' || email === '' || cep === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return false;
    }

    return true;
  }

  function displayResults() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);
    const alcool = parseInt(document.getElementById('alcool').value);

    const carneHomem = 0.4 * homens;
    const carneMulher = 0.32 * mulheres;
    const carneCrianca = 0.2 * criancas;
    const totalCarne = carneHomem + carneMulher + carneCrianca;

    const paoDeAlho = 2 * mulheres + criancas;
    const carvao = homens + mulheres + criancas + alcool;
    const sal = (0.04 * (homens + mulheres + criancas + alcool)).toFixed(2);
    const gelo = Math.ceil((homens + mulheres + criancas + alcool) / 10) * 5;
    const refrigerante = Math.ceil((homens + mulheres + criancas + alcool) / 5);
    const agua = Math.ceil((homens + mulheres + criancas + alcool) / 5);
    const cerveja = 3 * alcool;

    const table = document.querySelector('#step3 table');
    table.innerHTML = `
        <tr>
          <th>Item</th>
          <th>Quantidade</th>
        </tr>
        <tr>
          <td>Carne</td>
          <td>${totalCarne >= 1 ? totalCarne + ' kg' : (totalCarne * 1000) + ' g'}</td>
        </tr>
        <tr>
          <td>Pão de Alho</td>
          <td>${paoDeAlho == 1 ? paoDeAlho + ' unidade' : paoDeAlho + ' unidades'}</td>
        </tr>
        <tr>
          <td>Carvão</td>
          <td>${carvao >= 1 ? carvao + ' kg' : (carvao * 1000) + ' g'}</td>
        </tr>
        <tr>
          <td>Sal</td>
          <td>${sal >= 1 ? sal + ' kg' : (sal * 1000) + ' g'}</td>
        </tr>
        <tr>
          <td>Gelo</td>
          <td>${gelo} kg</td>
        </tr>
        <tr>
          <td>Refrigerante</td>
          <td>${refrigerante} garrafa(s) de 2L</td>
        </tr>
        <tr>
          <td>Água</td>
          <td>${agua} garrafa(s) de 1L</td>
        </tr>
        <tr>
          <td>Cerveja</td>
          <td>${cerveja} garrafa(s) de 600ml</td>
        </tr>
      `;
  }

});
