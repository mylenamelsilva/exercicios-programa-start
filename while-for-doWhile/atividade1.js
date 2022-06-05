// 1) Faça uma função que exibe todos os números menores que 10.

function menorQueDez() {
    let numero = 1;

    while (numero < 10) {
        console.log(numero);
        numero++
    }
}

menorQueDez()

// 2) Faça uma função que exibe todos os números maiores que 50 e menores que 70.

function contagemNumeros() {
    let numero = 51;

    while (numero > 50 && numero < 70) {
        console.log(numero);
        numero++
    }
}

contagemNumeros()