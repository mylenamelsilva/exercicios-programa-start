// 1) Faça uma função que exibe todos os números menores que 1000 que são múltiplos de 100.

function verificarMultiplos() {
    let numero = 0;
    while (numero < 1000) {
        if (numero % 100 == 0) {
            console.log(numero)
        }
        numero++
    }
}

verificarMultiplos()

// 2) Faça uma função que exibe todos os números maiores que 10 e menores que 100 que são pares.

function verificarPares() {
    let numeroPar = 10;
    for (numeroPar; numeroPar < 100; numeroPar++) {
        if (numeroPar % 2 == 0) {
            console.log(numeroPar)
        }
    }
}

verificarPares()


