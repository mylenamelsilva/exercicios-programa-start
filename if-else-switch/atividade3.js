/*  1) Faça uma função que receba dois valores, e retornar uma mensagem de acordo com as validações abaixo:

● ‘Números iguais’, se os números forem iguais.

● ‘Primeiro é maior’, se o primeiro for maior que o segundo;

● ‘Segundo maior’, se o segundo for maior que o primeiro. */

function greaterOrLess(firstNumber, secondNumber) {
    const equalNumbers = firstNumber == secondNumber;
    const firstIsGreater = firstNumber > secondNumber;

    if (equalNumbers) {
        return `${firstNumber} e ${secondNumber}: Números iguais`;
    } 
    else if (firstIsGreater) {
        return `${firstNumber} e ${secondNumber}: Primeiro é maior`;
    }
    else {
        return `${firstNumber} e ${secondNumber}: Segundo é maior`;
    }
}

console.log(greaterOrLess(2,2));
console.log(greaterOrLess(8,4));
console.log(greaterOrLess(6,12));


/*  2) Faça uma função que receba um valor e diga se ele é positivo ou negativo (considere o valor zero como positivo). */

function positiveOrNegative(number) {
    const positiveNumber = number >= 0;

    if (positiveNumber) {
        return `O número: ${number} é positivo`
    }
    else {
        return `O número: ${number} é negativo`
    }
}

console.log(positiveOrNegative(8));
console.log(positiveOrNegative(-32));
console.log(positiveOrNegative(0));

/*  3) Faça uma função que receba o nome de 2 times e o número de gols marcados na partida (para cada time), para:

● Escrever o nome do vencedor.

● Caso não haja vencedor deverá ser retornada a palavra EMPATE. */

function matchWinner(firstTeam, firstTeamGoals, secondTeam, secondTeamGoals) {
    const firstTeamWinner = firstTeamGoals > secondTeamGoals;
    const secondTeamWinner = secondTeamGoals > firstTeamGoals;

    if (firstTeamWinner) {
        return `O time do ${firstTeam} ganhou do ${secondTeam} com ${firstTeamGoals} gols`;
    } 
    else if (secondTeamWinner){
        return `O time ${secondTeam} ganhou do ${firstTeam} com ${secondTeamGoals} gols`;
    }
    else {
        return `O time ${secondTeam} empatou com o ${firstTeam} com ${secondTeamGoals} gols`;
    }
}

console.log(matchWinner('Sport', 3, 'Santa', 1));
console.log(matchWinner('Nautico', 0, 'Sport', 2));
console.log(matchWinner('Salgueiro', 0, 'Sport', 0));

/*  4) Faça uma função que receba:

● A descrição do produto (nome), a quantidade adquirida e o preço unitário.

● Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

○ Se quantidade <= 5 o desconto será de 2%

○ Se quantidade > 5 e quantidade <=10 o desconto será de 3%

○ Se quantidade > 10 o desconto será de 5% */

const product = {
    nome: 'Celular',
    quantidade: 2,
    precoUnitario: 1500
}

function price(infoProduct) {
    const total = infoProduct.quantidade * infoProduct.precoUnitario;
    const totalWDiscount = total - discount;
    const twoPercent = 2 / 100;
    const threePercent = 3 / 100;
    const fivePercent = 5 / 100;

}