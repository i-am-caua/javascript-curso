const meuNome = "Cauã";
let numIdade = 19;
const notaProva = 7.5;
const linguagemFavorita = "C";

// no js o let tem escopo de bloco, igualzinho ao C
if (numIdade >= 18) {
    let maiorIdade = true;
    console.log(meuNome + " é maior de idade");
}
// console.log(maiorIdade); se eu chamar aqui fora vai dar erro

// var eu não devo usar nunca, ela não respeita o if e vaza
var estudandoJs = true;

// tipagem dinamica do JS, ela muda o tipo na hora
let variavelTeste = 10;
console.log("agora é numero: " + variavelTeste);
variavelTeste = "virou texto";
console.log("agora é string: " + variavelTeste);
variavelTeste = [1, 2, 3];
console.log("agora é vetor");

// coersao de tipo, o JS inventa de converter string sozinho
let stringCinco = "5";
let numDois = 2;

// quando junta + ele vira texto (concatena)
console.log("5 + 2 = " + (stringCinco + numDois)); // sai 52

// quando multiplica ou diminui, ele converte pra numero e calcula
console.log("5 * 2 = " + (stringCinco * numDois)); // sai 10

// operador ternario igual ao C
console.log(notaProva >= 6.0 ? "Aprovado" : "Reprovado");
