/* 1)    Faça uma função para receber um número e mostrar o resultado conforme a tabela abaixo:

- numero < 10: o número é unidade
- numero >= 10 e numero < 100: o número é dezena
- numero >= 100 e numero < 1000: o número é centena */

function sistemaNumerico(numero) {
    const unidade = numero < 10;
    const dezena = numero >= 10 && numero < 100;
    const centena = numero >= 100 && numero < 1000;

    if (unidade) {
        return `O número é unidade`
    }
    if (dezena) {
        return `O número é dezena`
    }
    if (centena) {
        return `O número é centena`
    }
}

console.log(sistemaNumerico(87));
console.log(sistemaNumerico(5));
console.log(sistemaNumerico(546));


/* 2)      Tendo como dados de entrada a altura e o sexo de uma pessoa, faça uma função que calcule seu peso ideal, utilizando as seguintes fórmulas:

Para homens: (72.7*h) - 58

Para mulheres: (62.1*h) - 44.7   

(h = altura) */

function pesoIdeal(altura, sexo) {
    const pesoHomem = (72.7 * altura) - 58;
    const pesoMulher = (62.1 * altura) - 44.7;

    switch(sexo) {
        case 'feminino':
            return `O peso ideal é: ${pesoMulher.toFixed(2)}`
            break;
        case 'masculino':
            return `O peso ideal é: ${pesoHomem.toFixed(2)}`;
            break;
        default:
            return `Escreva seu sexo como masculino ou feminino`;
            break;
    }
}

console.log(pesoIdeal(1.88, 'masculino'));
console.log(pesoIdeal(1.59, 'nsei'));
console.log(pesoIdeal(1.67, 'feminino'));

/* 3)      Faça uma função que recebe a idade do usuário e verifique se ele tem 18 anos ou mais. Se a resposta for positiva escrever “maior de idade”, senão “menor de idade”. */

 function verificarMaioridade(idade) {
     const ehMaior = idade >= 18;

     if (ehMaior) {
         return `Maior de idade`
     } else {
         return `Menor de idade`
     }
 }

 console.log(verificarMaioridade(18));
 console.log(verificarMaioridade(15));
 console.log(verificarMaioridade(20));