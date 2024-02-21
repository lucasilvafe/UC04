// Sem bagunça
class CadastroProjeto {
    projetos_andamento: string;
    equipe_responsavel: string;
    
    // Metodo construtor
    constructor(projetos_andamento: string, equipe_responsavel: string)
    {
        this.projetos_andamento = projetos_andamento;
        this.equipe_responsavel = equipe_responsavel;
    }
    cadastroProjeto()
    {
        console.log(`Cadastro`)
        console.log(`Projetos em andamento: ${this.projetos_andamento}`)
        console.log(`Equipe Responsavel: ${this.equipe_responsavel}`)
    }
}
const cadastro_projeto = new CadastroProjeto('Limpeza', 'Galera da Limpeza')
console.log(cadastro_projeto.cadastroProjeto())

class ControleTarefas {
    tarefa: string;
    nome: string;
    descricao: string;
    equipe_responsavel: string;
    
    // Metodo construtor
    constructor(tarefa: string, nome: string, descricao: string, equipe_responsavel: string)
    {
        this.tarefa = tarefa;
        this.nome = nome;
        this.descricao = descricao;
        this.equipe_responsavel = equipe_responsavel;
    }
    controleTarefas()
    {
        console.log(`Controle de Tarefas`)
    }
}
const controle_tarefas = new ControleTarefas('Limpar tudo', 'Limpa Tgeral', 'limpar', 'Lucas')
console.log(controle_despesas.controleDespesas())