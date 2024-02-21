// Banco dinheiro seguro
class CadastroConta {
    saldo: string;
    conta: string;
    titularconta: string;
    agencia: string;
    
    // Metodo construtor
    constructor(saldo: string, conta: string, titularconta: string, agencia: string)
    {
        this.saldo = saldo;
        this.conta = conta;
        this.titularconta = titularconta;
        this.agencia = agencia;
    }
    cadastroConta()
    {
        console.log(`Cadastro`)
        console.log(`Saldo da Conta: ${this.saldo}`)
        console.log(`Numero da Conta: ${this.conta}`)
        console.log(`Titular da Conta: ${this.titularconta}`)
        console.log(`Agencia bancaria: ${this.agencia}`)
    }
}
const cadastroconta = new CadastroConta('324', '2343455353', 'Lucas', '12')
console.log(cadastroconta.cadastroConta())

class ControleDespesas {
    transferencias: string;
    transferenciasM: string;
    gastosM: string;
    comprovante: string;
    
    // Metodo construtor
    constructor(transferencias: string, transferenciasM: string, gastosM: string, comprovantes: string)
    {
        this.transferencias = transferencias;
        this.transferenciasM = transferenciasM;
        this.gastosM = gastosM;
        this.comprovante = comprovantes;
    }
    controleDespesas()
    {
        console.log(`Controle de despesas`)
        console.log(`Transferencias: ${this.transferencias}`)
        console.log(`Transferencias mensais: ${this.transferenciasM}`)
        console.log(`Gastos mensais: ${this.gastosM}`)
        console.log(`Comprovantes bancários: ${this.comprovante}`)
    }
}
const controle_despesas = new ControleDespesas('23', '2', '74', '12')
console.log(controle_despesas.controleDespesas())

class Planejamento {
    poupanca: string;
    
    // Metodo construtor
    constructor(poupanca: string)
    {
        this.poupanca = poupanca;
    }
    planejamento()
    {
        console.log(`Planejamento`)
        console.log(`Poupança: ${this.poupanca}`)
    }
}
const planejamento = new Planejamento('500')
console.log(planejamento.planejamento())