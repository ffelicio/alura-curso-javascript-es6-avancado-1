class PessoaEcma6 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        // Interpolação
        return `${this.nome} ${this.sobrenome}`;
    }
}