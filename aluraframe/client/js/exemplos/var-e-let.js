/**
 * Exemplo 1
 */
for( var i = 1; i <= 100; i++ ) {
    console.log('Dentro do loop: ' + i);
}

/**
 * Na instrução abaixo, a variável "i" por mais que esteja sendo definida dentro do "for", será impresso o valor "101".
 * Isso acontece porque o Javascript não possui escopo de bloco, então o fato de declararmos uma variável dentro de um bloco
 * não garantirá que temos um escopo.
 */
console.log("Fora do loop: " + i);

/**
 * Exemplo 2 - Escopo de bloco
 */
for( let j = 1; j <= 100; j++ ) {
    console.log('Dentro do loop: ' + j);
}

/**
 * Na instrução abaixo haverá um erro de variável não definida (Uncaught ReferenceError: j is not defined).
 * Isso acontece devido a utilização da palavra-chave "let". Ela dá o poder de escopo na variável, podendo ser utilizada
 * somente no bloco em que foi definida.
 */
console.log("Fora do loop: " + j);