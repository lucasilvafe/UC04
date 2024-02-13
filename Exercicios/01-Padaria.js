var pao = 0.12;
var broa = 1.50;
var paesVendidos = 200;
var broasVendidas = 25;
var totalArrecadado = (paesVendidos * pao) + (broasVendidas * broa);
var polpanca = totalArrecadado / 100 * 10
console.log(`O total Arrecadado foi ${totalArrecadado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} adicione na poupança ${polpanca.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)