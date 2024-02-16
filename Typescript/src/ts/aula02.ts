// adicionando a variavel formulario ao id dele
const formulario = document.getElementById('formulario') as HTMLElement



formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = (document.getElementById('nome') as HTMLInputElement).value;

    const telefone = (document.getElementById('telefone') as HTMLInputElement).value;

    const dataNascimento = (document.getElementById('nasc') as HTMLInputElement).value;

    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    const dados = `
    Nome: ${nome}<br>
    Telefone: ${telefone}<br>
    Data de nascimento: ${dataNascimento}<br>
    CPF ${cpf}<br>
    E-mail ${email}
    `
    const exibir = document.getElementById('resposta');
    if (exibir)
    {
        exibir.innerHTML = dados
    }
});