function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

console.log(somaDoisNumeros(10,30)); // exibe 40!

// Muitas vezes não recebemos os dados em uma estrutura compatível com nossas funções, como no exemplo:
let numeros = [10, 30];
console.log(somaDoisNumeros(numeros[0], numeros[1]));

// Utilizando spread operator
/**
 * Usamos "..."" antes do array passado como parâmetro.
 * Cada item do array será passado para cada parâmetro recebido pela função. Inclusive isso vale para o "constructor" de uma classe.
 */
let numerosSpread = [10, 30];
console.log(somaDoisNumeros(...numerosSpread));