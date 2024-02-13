//Unidades de camisas tamanho P
var unidadeP = 8;
//Unidades de camisas tamanho M
var unidadeM = 4;
//Unidades de camisas tamanho G
var unidadeG = 7;

let p = calcP()
let m = calcM()
let g = calcG()
let total = p + m + g;

console.log(`Valor total arrecadado foi de ${total.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`)

function calcP()
{
    let valor = 10;
    let quantidade = unidadeP;
    let total = quantidade * valor;
    console.log(`Foram vendida(s) ${unidadeP} unidades do tamanho 'P' Total: ${total.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`)
    return total
}

function calcM()
{
    let valor = 12;
    let quantidade = unidadeM;
    let total = quantidade * valor;
    console.log(`Foram vendida(s) ${unidadeM} unidades do tamanho 'M' Total: ${total.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`)
    return total
}

function calcG()
{
    let valor = 15;
    let quantidade = unidadeG;
    let total = quantidade * valor;
    console.log(`Foram vendida(s) ${unidadeG} unidades do tamanho 'G' Total: ${total.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`)
    return total
}