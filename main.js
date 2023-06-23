/*
window.console.log("Aula 2 - VARIAVEIS & TIPOS DE DADOS")

//const
//let

let message = 'hello world'
message= 'ola mundo!'
alert(message)


//STRINGS
//mostra a quantidade de caracteres
const message = 'Hello world!'
console.log(message.length)

const firstName = "Elvis";
const lastName = "Presley";

//modo antigo
console.log("Meu nome é " + firstName + " " + lastName);
//modo atual
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`);

//colocar cana nome em uma lista
const names = "Ana,Julia,Bruna";
console.log(names.split(","));
//cortar por letra
const name = "Maria";
console.log(name.split(""));

//NÚMEROS

const number = 5;
console.log(number * 2);

//converter numero pra string
console.log(number.toString());

//pra saber qual é o tipo
console.log(typeof number)
console.log(typeof number.toString())


//BOOLEANOS

false
true

console.log(2 == 2)

//NULL & UNDEFINED
// x não tem nenhum valor, vazio
const x = null;

//valor ainda indefinido
const y = undefined;
*/

/*
window.console.log("Aula 03 - LISTAS")

//LISTA

const names = ["Maria", "Francisca", "Joana", 10, false];

//pra buscar o nome na posição 1
const chica = names[1];
console.log(chica);

//adiciona valores no final do array
names.push("Joaquim");
console.log(names);
names.push("Luiz");
console.log(names);

//adiciona valores no começo do array
names.unshift("Benjamin");
console.log(names);

//retira ultimo valor
names.pop();
console.log(names);

//mudar valores joana para ana
names[3] = "Ana"
console.log(names);

//verifica qual é a posição do elemento joaquim = 6
console.log(names.indexOf("Joaquim"));
console.log(names);

//ordenar lista alfabeticamente
const indexOfJoaq = names.indexOf("Joaquim");
const sortedNames = names.sort();
console.log(sortedNames);

//quantos itens tem na lista
console.log(names.length);

//verifica se alguma variavel é uma lista | se names é uma lista
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);
*/


window.console.log("Aula 04 - MAP, FILTER & REDUCE")

//MAP
// executa em uma função em cada item da lista e retorna uma nova lista com o resultado
const numbers = [1, 2, 3, 4, 5];
const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
});
console.log(numbersMultipliedByTwo);

//FILTER
const ages = [8, 13, 27, 30, 22, 40];
//filtrar, fazer uma nova lista e mostrar numeros pares
const evenAges = ages.filter(function(age) {
    return age % 2 === 0  //se o resto da divisão é zero, é par
})
console.log(evenAges);

//REDUCE
//soma todos numeros [8, 13, 27, 30, 22, 40];
const sumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0); //inicia com 0 + age
console.log(sumOfAges);

const sumOfAgess = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 100); //inicia com 100 + age
console.log(sumOfAgess);