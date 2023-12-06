// Entrada de dados
let readlineSync = require('readline-sync');

let nome = readlineSync.question("Qual o eu nome?");
let nota1 = parseFloat(readlineSync.question("Informe a nota 1:\n"));
let nota2 = parseFloat(readlineSync.question("Informe a nota 2:\n"));
let nota3 = parseFloat(readlineSync.question("Informe a nota 3:\n"));
let nota4 = parseFloat(readlineSync.question("Informe a nota 4:\n"));
let nota5 = parseFloat(readlineSync.question("Informe a nota 5:\n"));

 //Processamento
nome = nome.toUpperCase();

// Somar todas as notas
let soma_notas = nota1 + nota2 + nota3 + nota4 + nota5

//Dividir o valor da soma por 5
let valor_das_somas = soma_notas/5
 //Saída
console.log(`OLÁ ${nome}`);
console.log(soma_notas)

//Media final
console.log (valor_das_somas)

