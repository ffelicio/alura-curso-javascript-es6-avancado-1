class Negociacao {
    constructor(data, quantidade, valor) {
        /**
         * O underscore("_") é uma convenção para informar ao programador que os atributos(propriedades) são privados e que só
         * poderão ser acessados ou modificados dentro da própria classe em que os mesmos foram definidos.
         * Até o momento atual o javascript não possui modificadores de acesso, então não há impedimento na utilização
         * direta dos atributos fora da classe, mas devido a convenção o acesso deverá ser feito com métodos.
         */
        this._data = new Date(data.getTime()); // criando uma nova instância a partir do tempo de uma data
        this._quantidade = quantidade;
        this._valor = valor;

        /**
         * A ação abaixo congela o objeto, e caso houver a modificação do atributo(propriedade) diretamente, a ação não será realizada.
         * Não é uma solução 100% de encapsulamento, porque ainda conseguimos enxergar os atributos fora da classe.
         */
        Object.freeze(this);
    }

    /**
     * A palavra chave "get", é um atalho para quando queremos acessar uma propriedade.
     * Nesse formato podemos acessar o método como se fosse uma propriedade, ou seja, ao invés de chamarmos
     * da seguinte forma(tomando com exemplo o atributo "_data"): "objeto.data()", chamaríamos com "objeto.data".
     * Caso o programador tente alterar a propriedade da seguinte forma:
     *  "objeto.data = new Date()"
     * o valor não será modificado, porque está havendo a ação de modificação em um método somente de leitura.
     */
    get data() {
        /**
         * Por mais que a classe Negociacao esteja congelada com "Object.freeze(this)" (não podendo alterar valor), o atributo "_data" pode ser
         * modificado conforme abaixo, porque o mesmo é um objeto "Date".
         * O congelamento da classe não se arrasta até as informações de "Date" para poder aplicar a mesma ação.
         * O "Object.freeze(objeto)" é considerado "shallow", ou seja, o mesmo somente congela os seus atributos
         * para não haver modificação. Para os atributos que se referem a objetos, a ação de congelamento não existe.
         * 
         * A ação abaixo (devolvendo uma nova instância de "Date"), é uma blindagem para evitar que a informação seja alterada
         * diretamente.
         */
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}