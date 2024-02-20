// Leitura Certa
class CadastroLivro {
    nome: string;
    autor: string;
    publicacao: Date;
    // Metodo construtor
    constructor(nome: string, autor: string, publicacao: Date)
    {
        this.nome = nome;
        this.autor = autor;
        this.publicacao = publicacao;
    }
    cadastroLivro()
    {
        console.log(`Cadastro de Livros`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Data de Publicação: ${this.publicacao}`)
    }
}
const cadastrolivro1 = new CadastroLivro('Clean Code', 'Robert Cecil Martin', new Date('2008-7-8'))
console.log(cadastrolivro1.cadastroLivro())

class CadastroUsuario {
    nome: string;
    cpf: string;
    telefone: string;
    endereco: any[];
    // Metodo construtor
    constructor(nome: string, cpf: string, telefone: string, endereco: any[])
    {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    cadastroUsuario()
    {
        console.log('Cadastro do Usuario')
        console.log(`Nome do `)
    }
}
const cadastrousuario1 = new CadastroUsuario('Lucas', '3353925524', '46663646', ['Rua quadrada', 'Av. redonda', 234])
console.log(cadastrousuario1)

class EmprestimoLivro {
    nome: string;
    cpf: string;
    telefone: string;
    quantidade: number;
    emprestimo: Date;
    entrega: Date;
    // Metodo construtor
    constructor(nome: string, cpf: string, telefone: string, quantidade: number, emprestimo: Date, entrega: Date)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.quantidade = quantidade;
        this.emprestimo = emprestimo;
        this.entrega = entrega;
    }
}
const emprestimolivro1 = new EmprestimoLivro('Lucas', '3353925524', '46663646', 3, new Date('2024-1-3'), new Date('2024-2-2'))
console.log(emprestimolivro1)