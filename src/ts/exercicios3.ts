// Banco dinheiro seguro
class CadastroConta {
    saldo: string;
    conta: string;
    titularconta: string;
    
    // Metodo construtor
    constructor(saldo: string, conta: string, titularconta: string)
    {
        this.saldo = saldo;
        this.conta = conta;
        this.titularconta = titularconta;
    }
}
const cadastroconta = new CadastroConta('324', '234345535355', 'Ednaldo Pereira')
console.log(cadastroconta)