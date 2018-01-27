function PessoaEcma5(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

PessoaEcma5.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}