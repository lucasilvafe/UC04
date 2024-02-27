//Hospital chega doente sai bom
abstract class Pessoa {
    constructor(
        private nome: string,
        public endereco: string,
        private email: string,
        public telefone: string,
        public data_nascimento: Date,
        protected rg: string,
        public genero: string
    ) { }
    mostraDados() {

    }
    getEmail(): string {
        return this.email
    }
    getNome(): string {
        return this.nome
    }
    //Modificar
    setEmail(email: string): void {
        //this email recebe email
        this.email = email
    }
}

class Funcionario extends Pessoa {
    constructor(
        public cargo: string,
        public matricula: string,
        nome: string,
        endereco: string,
        email: string,
        telefone: string,
        data_nascimento: Date,
        rg: string,
        genero: string) {
        super(nome, endereco, email, telefone, data_nascimento, rg, genero)
    }
    mostraDados() {
        console.log(`--Dado da Pessoa--`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`RG: ${this.rg}`)
        console.log(`E-mail: ${super.getEmail()}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}\n`)
    }
}
const funcionario1 = new Funcionario('Concertardor de geladeiras', 'sla', 'Jasinto', 'Rua dos bobos n°0', 'funcionario@hotmail.com', '(84)92352-5552', new Date('1995-11-11'), '234324','ewr')
funcionario1.mostraDados()
funcionario1.setEmail('lucasMod@gmail.com')
funcionario1.getEmail()


class Consultas {
    constructor(
        public local: string,
        public data: Date,
        protected convenio: boolean,
        public medico: string
    ) { }
    mostraDados() {
        console.log(`--Dado da Consulta--`)
        console.log(`Data: ${this.data}`)
        console.log(`Local: ${this.local}`)
        console.log(`Convenio: ${this.convenio}`)
        console.log(`Medico: ${this.medico}\n`)
    }
}

const consulta1 = new Consultas('Lagoa Azul', new Date('2024-2-19'), false, 'Med Lucas')
consulta1.mostraDados()

class Paciente extends Pessoa {
    constructor(
        public cpf: string,
        public crtaosus: string,
        protected alergias: string,
        nome: string,
        endereco: string,
        email: string,
        telefone: string,
        data_nascimento: Date,
        rg: string,
        genero : string
    ) { super(nome, endereco, email, telefone, data_nascimento, rg, genero) }
    mostrarDados() {
        console.log(`--Dado do Pciente--`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Cartão: ${this.crtaosus}`)
        console.log(`Alergico: ${this.alergias}`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleString('pt-BR')}`)
        console.log(`Genero ${this.genero}`)
        console.log(`RG: ${this.rg}\n`)
    }
}
const paciente1 = new Paciente('cpf', 'numero sus', 'nao', 'lucas', 'av', '@gmail', '(84)94565-7748', new Date('2000-11-11'), '32424','weerew')
paciente1.mostrarDados()
/* Analisar as questões 1,2,3 e 4 buscando atributos que precisam serem privados ou protect.
Buscar nos exercicios as classes que precisam de abstração*/

document.addEventListener('DOMContentLoaded',
    function ()
    {
        const form = document.querySelector('#formFuncionario');
        if (form) {
            form.addEventListener('submit',
                function (event) {
                    event.preventDefault();

            const nome = (document.getElementById('nome') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const telefone = (document.getElementById('telefone') as HTMLInputElement).value;
            const endereco = (document.getElementById('endereco') as HTMLInputElement).value;
            const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
            const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
            const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
            const matricula = (document.getElementById('matricula') as HTMLInputElement).value;
            const genero = (document.getElementById('genero') as HTMLSelectElement).value;
            const data = new Date(dataNascimento).toLocaleDateString("pt-BR")
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('dataNascimento', datay);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            localStorage.setItem('genero', genero)

            window.location.href = './funcionario.html';
        });
        }else{
            console.error('Formulario não encontrado!')
        }
    }
);