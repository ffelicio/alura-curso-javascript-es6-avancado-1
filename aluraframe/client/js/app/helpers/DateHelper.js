class DateHelper {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada.');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(data) {
        // Fará o recurso de fail fast, ou seja, falhará antes da execução das linhas posteriores a esta verificação.
        if(! /\d{4}-\d{2}-\d{2}/.test(data) ) {
            throw new Error('A data deve estar no formato aaaa-mm-dd');
        }

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
        return new Date(...data.split('-').map((item, indice) => item - indice % 2));
    }
}