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

        this._listaNegociacoes = new ListaNegociacoes();
    }

    adicionar(event) {
        event.preventDefault();

        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._limparFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limparFormulario() {
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = '0.0';
        this._data.focus();
    }
}