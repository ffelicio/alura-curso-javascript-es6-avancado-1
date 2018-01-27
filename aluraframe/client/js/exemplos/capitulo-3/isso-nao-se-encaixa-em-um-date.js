/**
 * Formas de apresentação da data
 */
let hoje = new Date();

let outraData = new Date('2018/01/27');
console.log(outraData.getDate()); // imprime 27
console.log(outraData.getMonth()); // imprime 0 (no formato acima já é realizada a subtração do mês)
console.log(outraData.getFullYear()); // imprime 2018

/**
 * Veja que o construtor recebe o ano, mês e dia, contudo esta forma precisa receber o mês menos um e foi exatamente o que foi feito.
 * Para o mês 1(janeiro), passamos o valor '0'(zero). Nos argumentos estão sendo passados 'Number', mas também poderia ser passado
 * string que não daria problema.
 */
let outraDataOutraManeira = new Date(2018, 0, 27);

let dataString = '27-01-2018';

// Forma 1
dataString = dataString.split('-').reverse().join('/');
let data = new Date(dataString);
console.log(data);

// Forma 2
let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);

/**
 * A ideia é transformarmos a string em um array, onde teremos três elementos com o dia, mês e ano respectivamente. Daí, usamos o
 * método 'reverse' do 'Array' que inverte a sua ordem fazendo com que o ano seja o primeiro elemento e o dia o último. Nosso mês
 * continuará na sua posição original. Por fim, foi criada uma string a partir do array, usando o método 'join', que usará uma '/
 * para separar cada elemento.
 */