"use strict";
// adicionando a variavel formulario ao id dele
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('nasc').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const dados = `
    Nome: ${nome}<br>
    Telefone: ${telefone}<br>
    Data de nascimento: ${dataNascimento}<br>
    CPF ${cpf}<br>
    E-mail ${email}
    `;
    const exibir = document.getElementById('resposta');
    if (exibir) {
        exibir.innerHTML = dados;
    }
});
