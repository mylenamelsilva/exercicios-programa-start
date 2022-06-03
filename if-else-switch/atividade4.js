/* 1) Faça uma função que receba a quantidade de peças a serem compradas, e obedeça as regras abaixo:

● Se a quantidade = 50, informar ao cliente que ele tem desconto de 5%.

● Se a quantidade = 100, informar ao cliente que ele tem desconto de 10%.

● Qualquer valor diferente, o cliente não tem desconto. */

function discount(quantity) {
    switch(quantity){
        case 50:
            return `Você tem desconto de 5%`;
            break;
        case 100:
            return `Você tem desconto de 10%`;
            break;
        default:
            return `Você não tem desconto`;
            break;
    }
}

console.log(discount(50));
console.log(discount(18));
console.log(discount(100));


/* 2)      Faça uma função que receba a idade da pessoa, e informe:

●        Se a idade for igual a 65, dizer que a pessoa pode se aposentar por idade.

●        Se a idade for igual a 50, dizer que faltam 15 anos para se aposentar por idade.

●        Se a idade for igual a 35, dizer que faltam 30 anos para se aposentar por idade.

●        Qualquer idade diferente, dizer que procure o INSS. */

function verifyAge(age) {
    switch(age) {
        case 65:
            return `Você pode se aposentar por idade`;
            break;
        case 50:
            return `Faltam 15 anos para se aposentar por idade`;
            break;
        case 35:
            return `Faltam 30 anos para se aposentar por idade`;
            break;
        default:
            return `Procure o INSS`;
            break;

    }
}

console.log(verifyAge(50));
console.log(verifyAge(35));
console.log(verifyAge(18));
console.log(verifyAge(65));