class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobreNome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    static metodoStaticoQualquer() {
        console.log('Método estático chamado');
    }
}

Pessoa.metodoStaticoQualquer();