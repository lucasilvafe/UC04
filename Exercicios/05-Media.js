var mediaAluno = [[1],[2],[3]];
var tamanhoNota = mediaAluno.length;
var notas = 0;
contador = 0;
while (contador < tamanhoNota)
{
    var nota = Number(mediaAluno[[contador]])
    notas += nota
    contador++
}
var media = notas / tamanhoNota

console.log(`A média do aluno foi: ${media.toFixed(1)}`)
