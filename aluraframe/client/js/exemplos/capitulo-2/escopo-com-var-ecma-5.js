var idade = 18;
var temCarteira = true;

(function() {
    if(idade >= 18 && temCarteira) {
        var msg = 'Pode dirigir';
        console.log(msg);
    }
})();

try {
    console.log(msg); // exibe undefined
} catch(err) {
    console.log("Nome do erro: " + err.name, "| Mensagem : " + err.message);
}
