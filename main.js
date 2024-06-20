const form = document.getElementById('form-agenda')
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    totalDeNumeros();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');

    if (telefones.includes(inputTel.value)) {
        alert(`O Numero: ${inputTel.value} já foi inserido`);
    } else {

    nomes.push(inputNome.value);
    telefones.push(inputTel.value);
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalDeNumeros() {
    const  total = telefones.length;
    document.getElementById('qt-final').innerHTML = total;
}