var precoGasosa = 5.5;
var valor = 70;
var totalLitros = valor / precoGasosa;
console.log(`Com ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} você consegui um total de ${totalLitros.toFixed(2)} Litros de gasolina`)