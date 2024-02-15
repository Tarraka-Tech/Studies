// Atividade - Pratica (3)

// Exercício 1 - Crie um programa que concatene dois nomes e retorne uma frase de saudação.
// Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"

let nome1 = "João";
let nome2 = "Silva";
let nome_completo = `Olá ${nome1} ${nome2}!`;

console.log (nome_completo);

// Exercício 2 - Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
// Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"

let texto1 = "Hello";
let texto2 = "world";
let texto3 = texto1 + texto2;

console.log (texto3)

// Exercício 3 - Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
// Entrada: "12.5" Saída: 12

let numero_decimal = "12.5";

console.log (parseInt (numero_decimal));

// Exercício 4 - Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
// Entrada: "12" Saída: 12

let numero_inteiro = "12";

console.log (parseInt (numero_inteiro));

// Exercício 5 - Crie um programa que converta duas strings em formato de número inteiro para um número inteiro,
// faça uma soma desses números e apresente o resultado
// Entrada 1: "12" Entrada 2: "3" Saída: 15

let entrada1 = "12";
let entrada2 = "3";
let entrada1_convertida = parseInt (entrada1);
let entrada2_convertida = parseInt (entrada2);
let soma_entrada_convertida = entrada1_convertida + entrada2_convertida;

console.log (soma_entrada_convertida);
