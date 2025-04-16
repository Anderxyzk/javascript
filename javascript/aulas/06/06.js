//var nome = window.prompt("Qual é o seu nome?") //Vai armazenar o nome do usuário, digitado no prompt.

window.alert("É um grande prazer te conhecer! " + nome); //Concatenação.

var n1 = Number(window.prompt("Digite um número: ")); //Armazena o valor que for digitado nesse prompt na variável n1
var n2 = Number(window.prompt("Digite outro número: "));//Armazena o valor que for digitado nesse prompt na variável n2
sum = n1 + n2; //soma.
window.alert("A soma entre esses números é -> " + String(sum)); //Exibe o resultado da soma.
window.alert(`A soma entre ${n1} e ${n2} é igual a ${sum}`); //Template string, que é uma forma de concatenar strings, mais fácil de ler.

//var nome = window.prompt("Digite seu nome! ");
//var qnt = nome.length;
//window.alert(`O seu nome tem ${qnt} letras!`); //O length conta quantas letras tem na variável nome.



var nome = window.prompt("Digite seu nome! ");
document.write(`O seu nome tem ${nome.length} letras!`);
document.write(`Seu nome em maisculas é ${nome.toUpperCase()}`);
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`);

var n1 = 1324.32;
n1.toFixed(2);
n1.toFixed(2).replace(".", ","); //Substitui o ponto por vírgula.
n1.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}); //Formata o número para moeda brasileira.