var quiloRefeicao = 12;
var pesoPratoCliente = 1.5;
var total = quiloRefeicao * pesoPratoCliente;
console.log(`O cliente pagará ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)