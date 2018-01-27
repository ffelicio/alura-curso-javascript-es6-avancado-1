class NegociacaoController {
    constructor() {
        /**
         * O querySelector é uma função que pertence ao objeto document.
         * Internamente, o querySelector tem uma chamada para o "this", que é o contexto pelo qual o método é chamado. Logo, o "this"
         * é o document.
         * No entanto, quando colocamos o querySelector dentro do "$", ele passa a ser executado fora do contexto de document e isto
         * não funciona. Para fazer a associação com o document deverá utilizada a função ".bind()".
         */
        let $ = document.querySelector.bind(document);

        /**
         * Os dados estão sendo setados no construtor, para poder evitar o acesso do DOM toda vez que o método "adicionar" é
         * chamado, deixando o script mais performático. 
         */
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adicionar(event) {
        event.preventDefault();

        /**
         * No argumento do objeto "Date", está sendo utilizado o recurso "spread operator"(somente no Ecma 6). Esse recurso quebra
         * o array em argumentos. Como estamos utilizando a função "split" na data e o objeto "Date" recebe três argumentos, ficará
         * da seguinte forma:
         * 1º indice do array(ano) => 1º argumento do objeto Date
         * 2º indice do array(mês) => 2º argumento do objeto Date
         * 3º indice do array(dia) => 3º argumento do objeto Date
         * 
         * Também está sendo o utilizado o conceito de Arrow functions na função "map". Como é executada somente uma ação dentro do
         * corpo da função, o "return" foi omitido e a instrução ficou inline.
         * 
         * A lógica dentro da função é para fazer a subtração no valor do mês. No Javascript os valores de meses vão de 0 a 11.
         * Para não ter que fazer verificações dentro da função para saber a posição do mês, foi realizada a seguinte estrutura de
         * acordo com o array abaixo:
         * Data = [0 => 2017, 1 => 12, 2 => 25]
         * 
         * 1° indice - ano - posição "0" => (0 % 2) => 0 => 0 = 2017 - 0 = 2017
         * 2° indice - ano - posição "1" => (1 % 2) => 1 => 1 =   12 - 1 =   11
         * 3° indice - ano - posição "2" => (2 % 2) => 0 => 0 =   25 - 0 =   25
         * ----------------------------------------------------------------------------------
         * Data = [0 => 2017, 1 => 11, 2 => 25]
         */
        let data = new Date(...
            this._data.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );
        
        let negociacao = new Negociacao(
            data,
            this._quantidade.value,
            this._valor.value
          );
        
          console.log(negociacao);
    }
}