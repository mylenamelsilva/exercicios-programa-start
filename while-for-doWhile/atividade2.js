// 1) Faça uma função que exibe todos os números maiores que zero e menores que 10.

function menorQueDez() {
    let numero = 9;

    do {
        console.log(numero)
        numero--;
    } while (numero > 0);
}

menorQueDez()

// 2) Faça uma função que exibe os 10 primeiros números que são menores que 80.

function menorQueOitenta() {
    let numero = 70;

    do {
        console.log(numero);
        numero++
    } while (numero < 80);
}

menorQueOitenta()