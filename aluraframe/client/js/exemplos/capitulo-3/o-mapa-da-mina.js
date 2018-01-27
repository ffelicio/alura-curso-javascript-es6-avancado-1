/**
 * Criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu
 * "valor dobrado quando for ímpar".
 * 
 * Sequência de números:
 * [3,2,11,20,8,7]
 */

// 1º forma
let numerosForma1 = [3,2,11,20,8,7];
let novosNumerosForma1 = [];

numerosForma1.forEach(item => {
    if(item % 2  != 0) {
        novosNumerosForma1.push(item * 2);
    } else {
        novosNumerosForma1.push(item);
    }
});
console.log(novosNumerosForma1);

// 2º forma
let numerosForma2 = [3,2,11,20,8,7];
let novosNumerosForma2 = [];

numerosForma2.forEach(item => {
    if(item % 2) { // só entra no IF se o resultado for diferente de zero
        novosNumerosForma2.push(item * 2);
    } else {
        novosNumerosForma2.push(item);
    }
});
console.log(novosNumerosForma2);

// 3º forma
/**
 * Aqui utilizamos o 'if' ternário.
 * Quando o resultado do módulo dá 0(zero), o Javascript entende como "false" e não faz o cálculo para obter o dobro, caso
 * contrário, é retornado o dobro do número impar.
 */
let numerosForma3 = [3,2,11,20,8,7];
let novosNumerosForma3 = numerosForma3.map(item => item % 2 ? item * 2 : item);
console.log(novosNumerosForma3);

// 4º forma
/**
 * Quando fazemos o módulo de 'dois' de um número par, sobra '0'(zero), após somando-se 1(um) e depois multiplicando pelo item,
 * obtemos o mesmo item.
 * Quando o número é impar, o módulo obtido é 1(um), o qual incrementado, dá 2.
 */
let numerosForma4 = [3,2,11,20,8,7];
let novosNumerosForma4 = numerosForma4.map((item) => (item % 2 + 1) * item);
console.log(novosNumerosForma4);