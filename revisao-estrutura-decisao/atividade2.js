/* 1)    Faça uma função que receba a nota de duas avaliações , calcule a média e mostre ao usuário APENAS UMA das mensagens abaixo informando a sua situação.

- >=7: Aprovado
- =10: Aprovado com distinção
- >=3 e <7: Exame
- <3: Reprovado */

function mediaFinal(primeiraNota, segundaNota) {
    const media = (primeiraNota + segundaNota) / 2;

    const aprovado = media >= 7 && media < 10;
    const aprovadoDistincao = media == 10;
    const exame = media >= 3 && media < 7;

    if (aprovado) {
        return `Aprovado!`
    }
    if (aprovadoDistincao) {
        return `Aprovado com distinção!`
    }
    if (exame) {
        return `Exame`
    } else {
        return `Reprovado`
    }
}

console.log(mediaFinal(10, 10));
console.log(mediaFinal(8, 8));
console.log(mediaFinal(5, 5));
console.log(mediaFinal(2, 2));


/* 2)      Faça uma função que:

●        Leia 2 (dois) números;

●        Calcule o quadrado de cada um;

●        Se o valor resultante do quadrado do primeiro for >= 1000,

●        imprima o valor resultante do quadrado do primeiro número;

●        Caso contrário, imprima o valor resultante do quadrado do segundo número. */

 


/* 3)      Faça uma função que recebe o código de um determinado produto e mostre a sua classificação: */