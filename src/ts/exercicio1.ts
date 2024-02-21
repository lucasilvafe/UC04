//Hospital chega doente sai bom
class Pessoa
{
    nome: string;
    endereco: string[];
    email: string;
    telefone: string;
    data_nascimento: Date;
    rg: string;
    constructor(nome: string, endereco: string[], email: string, telefone: string, data_nascimento: Date, rg: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.rg = rg;
    }
    mostraDados()
    {
        console.log(`Dado da Pessoa:`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`RG: ${this.rg}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
    }
}

class Funcionario extends Pessoa {
    //metodos
    cargo: string;
    matricula: string;

    // Metodo construtor da classe
    constructor(cargo: string, matricula: string, nome: string, endereco: string[], email: string, telefone: string, data_nascimento: Date, rg: string) {
        super(nome, endereco, email, telefone, data_nascimento, rg)
        this.cargo = cargo;
        this.matricula = matricula;
    }
    mostraDados()
    {
        super.mostraDados()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}`)
    }
}
const funcionario1 = new Funcionario('Lucas', 'Rua2', 'luksilvafe@gmail.com', '', new Date(2024-2-3), 'Rua1', '4434545345','er')
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
    mostraDados()
    {
        console.log(`Dado da Consulta:`)
        console.log(`Data: ${this.data}`)
        console.log(`Local: ${this.local}`)
        console.log(`Convenio: ${this.convenio}`)
        console.log(`Medico: ${this.medico}`)
    }
}

const consulta1 = new Consultas('Lagoa Azul', new Date('2024-2-19'), false, 'Lucas')
console.log(consulta1.mostraDados())

class Paciente extends Pessoa {
    cpf: string;
    crtaosus: string;
    obs_alergias: string;
    constructor(cpf: string, crtaosus: string, obs_alergias: string, nome: string, endereco: string[], email: string, telefone: string, data_nascimento: Date, rg: string)
    {
        super(nome, endereco, email, telefone, data_nascimento, rg)
        this.cpf = cpf;
        this.crtaosus = crtaosus;
        this.obs_alergias = obs_alergias;
    }
    mostrarDados()
    {
        console.log(`Dado do Pciente:`)
        console.log(`E-mail: ${this.cpf}`)
        console.log(`Telefone: ${this.crtaosus}`)
        console.log(`cargo: ${this.endereco}`)
        console.log(`Data nascimento: ${this.endereco}`)
    }
}
const paciente1 = new Paciente('Lucas', '243244242', '544664633', '324245', 'Lagoa')
console.log(consulta1.mostraDados())
