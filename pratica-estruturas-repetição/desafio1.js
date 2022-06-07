/* 1) Faça uma função que escreva no console uma palavra de acordo com a especificação abaixo:

a) Utiliza os valores de 1 a 299.

b) Para cada valor, se ele for múltiplo de 3, deverá exibir a palavra: VAMO.

c) Para cada valor, se ele for múltiplo de 5, deverá exibir a palavra: BORA.

d) Para cada valor, se ele for múltiplo de 3 e 5 ao mesmo tempo, deverá exibir a palavra: VAMBORA. */

function classificacoes() {

    for (let numero = 1; numero <= 299; numero++) {
        let multiploDeTres = numero % 3 == 0;
        let multiploDeCinco = numero % 5 == 0;

        if (multiploDeTres && multiploDeCinco) {
            console.log(`${numero} VAMBORA`)
        } else if (multiploDeTres) {
            console.log(`${numero} VAMO`);
        } else if (multiploDeCinco) {
            console.log(`${numero} BORA`);
        }

    }
}

classificacoes()