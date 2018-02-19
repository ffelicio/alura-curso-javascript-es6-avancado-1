function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Nome 1', 'Nome 2', 'Nome 3'];
let listaDeNomes2 = ['Nome 4', 'Nome 5', 'Nome 6'];

// Todo array em JavaScript possui o método concat
// O resultado de concat é um novo array com todos os elementos de quem realizou o concat e quem foi passado para a função.
let lista = listaDeNomes1.concat(listaDeNomes2);
exibeNoConsole(lista);

console.log("\n");

// Se quisermos, podemos fazer de uma forma mais enxuta.
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2));

// A função concat aceita receber um número infinito de parâmetros, inclusive aqueles que não são um array.
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Teste 1', 123, 44.00, false));