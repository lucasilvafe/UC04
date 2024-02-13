var dd = 11; //Dia informado pelo usuário

var mm = 11;//Mês informado pelo usuário

var diasPassados = (mm * 30) - (30 - dd)

if (dd == 1 && mm == 1)
{
    console.log(`Ainda estamos no primeiro dia do ano!`)
}
else
{
    console.log(`Se passaram ${diasPassados} desde o primeiro dia do ano!`)
}