//Hospital chega doente sai bom
class Funcionario {
    //metodos
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    data_nascimento: Date;
    // Metodo construtor da classe
    constructor(nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date) {
        this.cargo = cargo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
    }
    mostraDados()
    {
        console.log(`Dado do funcionario:`)
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`cargo: ${this.cargo}`)
        console.log(`Data nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
    }
}
const funcionario1 = new Funcionario('Lucas', 'luksilvafe@gmail.com', '47745474754', 'Enfermeiro', new Date(2024-2-3))
console.log(funcionario1.mostraDados())


class Consultas {
    local: string;
    data: Date;
    convenio: boolean;
    medico: string;
    constructor(local: string, data: Date, convenio: boolean, medico: string) {
        this.data = data;
        this.local = local;
        this.convenio = convenio;
        this.medico = medico;
    }
    mostraDadosConsulta()
    {
        console.log(`Dado da Consulta:`)
        console.log(`Data: ${this.data}`)
        console.log(`Local: ${this.local}`)
        console.log(`Convenio: ${this.convenio}`)
        console.log(`Medico: ${this.medico}`)
    }
}

const consulta1 = new Consultas('Lagoa Azul', new Date('2024-2-19'), false, 'Lucas')
console.log(consulta1.mostraDadosConsulta())

class Paciente {
    paciente: string;
    cpf: string;
    crtaosus: string;
    telefone: string;
    endereco: string;
    constructor(paciente: string, cpf: string, crtaosus: string, endereco: string, telefone: string) {
        this.paciente = paciente;
        this.crtaosus = crtaosus;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    mostrarDadosPaciente()
    {
        console.log(`Dado do Pciente:`)
        console.log(`Nome: ${this.paciente}`)
        console.log(`E-mail: ${this.cpf}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Telefone: ${this.crtaosus}`)
        console.log(`cargo: ${this.endereco}`)
        console.log(`Data nascimento: ${this.endereco}`)
    }
}
const paciente1 = new Paciente('Lucas', '243244242', '544664633', '324245', 'Lagoa')
console.log(consulta1.mostraDadosConsulta())
