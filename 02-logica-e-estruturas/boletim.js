/* ### Desafio 1: O Boletim (`boletim.js`)
No C, percorrer arrays é chato. No JS é igual, mas pelo menos não tem erro de "Segmentation Fault" 😂.
*   **Setup:** Crie um array com várias notas aleatórias (ex: `let notas = [5.5, 8.0, 4.2, 9.5, 10.0, 3.0];`).
*   **Objetivo:** Usar um `for` clássico para calcular e imprimir:
    1. A maior nota da sala.
    2. A média aritmética da sala.
    3. Quantos alunos passaram (nota maior ou igual a 6.0).
*   *Dica de JS:* Diferente do C, pra saber o tamanho de um Array em que você não sabe quantos itens tem, não precisa de mágica com `sizeof()`. Basta usar `notas.length` !
*/

let notas = [5.5, 8.0, 4.2, 9.5, 10.0, 3.0];
let maior = notas[0];
let somaNotas = 0;
let totalAprovados = 0;
const notaMinAprovacao = 6.0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maior) maior = notas[i];
    somaNotas += notas[i];
    if (notas[i] >= notaMinAprovacao) totalAprovados++;
}

console.log(`A maior nota da sala foi ${maior}`);
console.log(`A media aritmedica é ${somaNotas / notas.length}`);
console.log(`O total de alunos que passou é ${totalAprovados}`);