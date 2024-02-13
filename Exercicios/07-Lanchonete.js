//Quantos Sandubas meu patrão?
var qntSanduiches = 35;

console.log(`Para fazer ${qntSanduiches} Sanduiches será necessário`)

totalQueijo()

totalPresunto()

totalHanburger()

function totalQueijo()
{
    let gramaQueijo = 50;
    let kilo = gramaQueijo / 1000
    let totalNecessario = kilo * qntSanduiches;
    console.log(`${totalNecessario.toFixed(3)} Kg de Queijo`)
    return totalNecessario
}

function totalPresunto()
{
    let gramaPresunto = 50;
    let kilo = gramaPresunto / 1000
    let totalNecessario = kilo * qntSanduiches;
    console.log(`${totalNecessario.toFixed(3)} Kg de Presunto`)
    return totalNecessario
}

function totalHanburger()
{
    let gramaHanburger = 100;
    let kilo = gramaHanburger / 1000
    let totalNecessario = kilo * qntSanduiches;
    console.log(`${totalNecessario.toFixed(3)} kg de Hanburgers`)
    return totalNecessario
}
