var horaNormal = 10;
var horaExtra = 15;
const porcentagem = 10;
var horaHextraTrabalhada = 0;
var horaTrabalhada = 8;



if (horaHextraTrabalhada == 0)
{
    var qntHorasHextra = horaHextraTrabalhada * horaExtra;
    let dia = horaNormal * horaTrabalhada;
    let semana = dia * 7;
    let salTotal = semana * 5;
    let descontado = salTotal / 100 * porcentagem; 
    let salDescontado = salTotal - descontado;
    console.log(`O salrio bruto foi de ${salTotal.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`);
    console.log(`E seu salario liquido ficou ${salDescontado.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`);
}

else
{
    let dia = horaNormal * horaTrabalhada;
    let semana = dia * 7;
    let salTotal = semana * 5;
    let descontado = salTotal / 100 * porcentagem;
    let salDescontado = salTotal - descontado;
    let totalExtras = horaExtra * horaHextraTrabalhada;
    let adicional = totalExtras + salDescontado;
    console.log(`O salrio bruto foi de ${salTotal.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`);
    console.log(`Salario liquido com desconto de 10% ficou ${salDescontado.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`);
    console.log(`Salario liquido com o adicional das horas extras ficou ${adicional.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`);
    console.log(`Voce fez um total de ${horaHextraTrabalhada} Horas extras`)
}
