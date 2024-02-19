class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    constructor(nome: string, email: string, telefone: string, cargo: string)
    {
        this.cargo = cargo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
const funcionario1 = new Funcionario('Lucas', 'luksilvafe@gmail.com', '47745474754', 'Enfermeiro')
console.log(funcionario1)


class Consultas
{
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario)
    {
        this.data = data;
        this.local = local;
        this.convenio = convenio;
        this.medico = medico;
    }
}

const consulta1 = new Consultas('Lagoa Azul', new Date('2024-2-19'),false,funcionario1)
console.log(consulta1)

class Paciente
{
    paciente: string;
    cpf: string;
    crtaosus: string;
    telefone: string;
    endereco: string;
    constructor(paciente: string, cpf: string, crtaosus: string, endereco: string, telefone: string)
    {
        this.paciente = paciente;
        this.
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}