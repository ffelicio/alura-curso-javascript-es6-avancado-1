class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        /**
         * Abaixo está sendo realizada a blindagem da lista de negociações através de programação defensiva.
         * Como o retorno é no formato array, a manipulação dos dados ocorrerá de forma direta utilizando
         * o método 'push', e no caso isso não poderá ser feito através desse método de retorno.
         * Quando alguém pedir uma lista de negociações, devolveremos uma nova lista - uma cópia da que tenho dentro da
         * ListaNegociacoes. Mesmo que adicionarmos o length = 0 ou inserir um elemento, como a lista está separada,
         * não será possível adicionar outra negociação.
         * Ao passarmos o this._negociacoes dentro do concat(), o retorno será uma nova lista, um novo array.
         */
        return [].concat(this._negociacoes);
    }
}