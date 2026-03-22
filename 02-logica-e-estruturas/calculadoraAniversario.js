const meuNome = "Cauã";
const mesAniversario = 3;
const diaAniversario = 25;

const parabensAniversario = (diaUsario, mesUsario) => {
    const dataAtual = new Date();
    const diaHoje = dataAtual.getDate();
    // Retorna o dia do mês (1 a 31)
    const mesHoje = dataAtual.getMonth() + 1;
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 1. Caso base: Hoje é o aniversário.
    // Usamos o 'return' para parar a função imediatamente.
    if (diaUsario === diaHoje && mesUsario === mesHoje) {
        console.log("Parabéns! Hoje é seu aniversário!");
        return;
    }

    let totalDiasAteNiver = 0;

    // 2. Lógica "booleana" pra deixar o IF super limpo!
    const niverJaPassou = (mesUsario < mesHoje) || (mesUsario === mesHoje && diaUsario < diaHoje);

    if (niverJaPassou) {
        // Cálculo de quando já passou (Fim deste ano + Início do ano que vem)
        let diasAteFimDoAno = diasPorMes[mesHoje - 1] - diaHoje;
        for (let i = mesHoje; i < 12; i++) {
            diasAteFimDoAno += diasPorMes[i];
        }

        let diasProximoAno = 0;
        for (let i = 0; i < mesUsario - 1; i++) {
            diasProximoAno += diasPorMes[i];
        }
        diasProximoAno += diaUsario;

        totalDiasAteNiver = diasAteFimDoAno + diasProximoAno;

    } else {
        // Cálculo de quando ainda vai chegar este mesmo ano
        if (mesUsario === mesHoje) {
            // Mesmo mês, ainda vai chegar
            totalDiasAteNiver = diaUsario - diaHoje;
        } else {
            // Mês futuro
            totalDiasAteNiver = (diasPorMes[mesHoje - 1] - diaHoje) + diaUsario;
            for (let i = mesHoje; i < mesUsario - 1; i++) {
                totalDiasAteNiver += diasPorMes[i];
            }
        }
    }

    // 3. Um único log no final! Usando Template Literals (crase ` `)
    console.log(`Faltam ${totalDiasAteNiver} dias para o seu aniversário!`);
}

function saudacao(nome) {
    console.log("Olá " + nome + ", seja bem - vindo");
}
saudacao(meuNome);
parabensAniversario(diaAniversario, mesAniversario);

