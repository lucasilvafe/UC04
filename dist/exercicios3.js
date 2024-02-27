"use strict";
/* // Banco dinheiro seguro
class Conta
{
    constructor(
        public corrente: boolean,
        public poupanca: boolean,
        public salario: boolean
    ){}
    mostrarDadosConta()
    {
        console.log('Conta')
        console.log(`Conta Corrente: ${this.corrente}`)
        console.log(`Conta Poupança: ${this.poupanca}`)
        console.log(`Conta Salário: ${this.salario}`)
    }
}
const conta = new Conta(true,false,false)
console.log(conta.mostrarDadosConta())

class Cliente
{
    constructor(
        public saldo: string,
        public numero_conta: string,
        public titularconta: string,
        public agencia: number
        ) { }
        mostrarDadosCliente()
        {
            console.log(`Dados da conta`)
            console.log(`Saldo: ${this.saldo}`)
            console.log(`Numero da conta: ${this.numero_conta}`)
            console.log(`Titular da conta: ${this.titularconta}`)
            console.log(`Agencia ${this.agencia}`)
            console.log(`============================`)
        }
}

const cliente = new Cliente('4535', '53434', 'Lucas', 55)
console.log(cliente.mostrarDadosCliente())

class Fisica extends Conta
{
    constructor(
        public nome: string
        ){
        super(corrente, poupanca, salario)
         }
    mostraDadosConta()
    {
        super.mostrarDadosConta()
    }
}

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
 */ 
