class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

function exibeNome() {
    alert(this.nome);
}

let pessoa = new Pessoa('Salsifufu');

exibeNome('Lampreia'); // PRIMEIRA CHAMADA <=============

exibeNome = exibeNome.bind(pessoa);

exibeNome(); // SEGUNDA CHAMADA <=============

/**
 * Será mostrado "undefined" e "Salsifufu".
 * Na primeira chamada, o parâmetro Lampreia é ignorado pela função, pois a função não recebe parâmetros. Não acontece nenhum erro,
 * mesmo a função não recebendo o parâmetro, uma característica do JavaScript. Sendo assim, quando exibeNome('Lampreia') é chamado,
 * o 'this' na verdade é 'window', 'o escopo global', e nele não temos o valor nome.
 * 
 * Quando executamos: exibeNome =
 *      exibeNome.bind(pessoa);
 * 
 * Estamos recebendo uma referência para uma nova função, que passa a ter o objeto 'pessoa' como 'this'. Ou seja, a função 'bind',
 * presente em todas as funções, permite indicar qual será o valor de 'this' quando ela for executada, em nosso caso pessoa. Como
 * pessoa possui a propriedade 'nome', será exibido no alerta o valor 'Salsifufu'.
 */