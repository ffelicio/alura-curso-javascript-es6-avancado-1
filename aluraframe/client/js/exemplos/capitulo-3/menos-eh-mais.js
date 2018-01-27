class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

console.log('Sem arrow functions');
console.log(aprovados);
console.log();

var aprovados2 = avaliacoes.filter(prova => prova.nota >= 7)
                           .map(prova => prova.aluno.nome);

console.log('Com arrow functions');
console.log(aprovados2);

