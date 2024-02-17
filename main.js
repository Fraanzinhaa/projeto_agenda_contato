const form = document.getElementById('form-contato');
const numero = [];

let linhas = '';
form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaAgenda();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');

  if (numero.includes(inputNumeroContato.value)) {
    alert(`O número: ${inputNumeroContato.value} já existe!`);
  } else {
  numero.push(inputNumeroContato.value); 

  let linha = '<tr>';
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNumeroContato.value}</td>`;
  linha += `</td>`;

  linhas += linha;
  }

  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}

function atualizaAgenda() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
