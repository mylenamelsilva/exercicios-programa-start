/* 1) Faça uma função que recebe um parâmetros numéricos:

● Calcule o resto da divisão por 5

● Se o resto da divisão for 0, dizer que o número é dividido por 5.

● Se não, dizer que o número não é dividido por 5. */

function divisao(dividendo) {
    const modulo = dividendo % 5;

    if (modulo === 0) {
        return `O número ${dividendo} é dividido por 5`
    } else {
        return `O número ${dividendo} não é dividido por 5`
    }
}

console.log(divisao(15));
console.log(divisao(2));


/* 2)      Faça uma função que recebe o preço de 2 produtos, calcular e escrever qual é o maior preço dos dois produtos. */

function precoDosProdutos(primeiroProduto, segundoProduto) {
    const primeiroMaiorQue = primeiroProduto  > segundoProduto;

    if (primeiroMaiorQue) {
        return `O primeiro produto tem o preço maior, que é: ${primeiroProduto}`;
    } else {
        return `O segundo produto tem o preço maior, que é: ${segundoProduto}`;
    }
}

console.log(precoDosProdutos(1500, 1000));
console.log(precoDosProdutos(350, 980));

/* 3)      Faça uma função que receba um valor e escreva se é positivo, negativo ou zero. */


function positivoOuNegativo(valor) {
    const ehPositivo = valor > 0;
    const ehNegativo = valor < 0;

    if (ehPositivo) {
        return `O número ${valor} é positivo`
    }
    if (ehNegativo) {
        return `O número ${valor} é negativo`
    } else {
        return `O número ${valor} é zero`
    }
}

console.log(positivoOuNegativo(4));
console.log(positivoOuNegativo(0));
console.log(positivoOuNegativo(-2));

/* 4) Faça uma função que receba o ano atual e o ano de nascimento de uma pessoa:

● Calcular a idade da pessoa;

● Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

function idade(anoAtual, anoNascimento) {
    const idadeAtual = anoAtual - anoNascimento;

    if (idadeAtual >= 16) {
        return `Você poderá votar nesse ano`
    } else {
        return `Você não poderá votar nesse ano`
    }
}

console.log(idade(2022, 2002));
console.log(idade(2022, 2010));
console.log(idade(2022, 2006));


/* 5)      As maçãs custam R$ 1,30 cada, se forem compradas menos de uma dúzia. E R$ 1,00 se forem compradas pelo menos 12. Faça uma função que receba o número de maçãs compradas, calcule e escreva o custo total da compra. */

function quantidadeMacas (quantidade) {
    const precoMenosDe12 = quantidade * 1.30;
    const precoIgualOuMaior12 = quantidade * 1.00;

    if (quantidade < 12) {
        return `Quantidade de maçãs: ${quantidade} e o Preço: ${precoMenosDe12.toFixed(2)}`
    } else {
        return `Quantidade de maçãs: ${quantidade} e o Preço: ${precoIgualOuMaior12.toFixed(2)}`
    }
}

console.log(quantidadeMacas(6));
console.log(quantidadeMacas(12));


/* 6)      Faça uma função que recebe um valor, escreva a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! */

function verificarValor(valor) {
    if (valor > 10) {
        return `É MAIOR QUE 10!`
    } else {
        return `É MENOR QUE 10!`
    }
}

console.log(verificarValor(45));
console.log(verificarValor(4));

/* 7)      Faça uma função que receba 4 (quatro) números:

●        Calcule o quadrado de cada um;

●        Se o valor resultante do quadrado do segundo for >= 1000, imprima-o e finalize;

●        Caso contrário, imprima os valores de todos e seus respectivos quadrados. */

function calcularQuadrado(arr) {
    let primeiroNumero = Math.pow(arr[0], 2);
    let segundoNumero = Math.pow(arr[1], 2);
    let terceiroNumero = Math.pow(arr[2], 2);
    let quartoNumero = Math.pow(arr[3], 2);

    if (segundoNumero >= 1000) {
        return `Quadrado do segundo número: ${segundoNumero}`;
    } else {
        return `O quadrado dos números: ${[primeiroNumero, segundoNumero, terceiroNumero, quartoNumero]}`
    }
}

let numeros = [2,2,2,2];
console.log(calcularQuadrado(numeros));

let outrosNumeros = [2,68,2,2];
console.log(calcularQuadrado(outrosNumeros));

