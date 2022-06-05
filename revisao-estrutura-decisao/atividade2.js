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

function calcularQuadrado(primeiroNumero, segundoNumero) {
    const quadrado = [Math.pow(primeiroNumero, 2), Math.pow(segundoNumero, 2)];
    
    if (quadrado[0] >= 1000) {
        return quadrado[0]
    } else {
        return quadrado[1]
    }
}

console.log(calcularQuadrado(50, 6));
console.log(calcularQuadrado(6, 2));

/* 3)      Faça uma função que recebe o código de um determinado produto e mostre a sua classificação:

1: alimento não-perecível
2, 3 ou 4: alimento perecível
5 ou 6: vestuário
7: higiene pessoal
8, 9 ou 10: utensílioos domésticos
qualquer outro código: código inválido     */

function classificacaoProduto(codigo) {
    switch (codigo) {
        case 1:
            return `Alimento não perecível`;
            break;
        case 2:
        case 3:
        case 4:
            return `Alimento perecível`;
            break;
        case 5:
        case 6:
            return `Vestuário`;
            break;
        case 7:
            return `Higiene pessoal`;
            break;
        case 8:
        case 9:
        case 10:
            return `Utensílios domésticos`;
            break;
        default:
            return `Código inválido`;
            break;
    }
}

console.log(classificacaoProduto(6));
console.log(classificacaoProduto(2));
console.log(classificacaoProduto(10));
console.log(classificacaoProduto(98));
console.log(classificacaoProduto(7));
console.log(classificacaoProduto(1));

