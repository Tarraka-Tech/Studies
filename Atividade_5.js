// Atividade - Pratica (5)

// Exercício 1 - Desenvolva uma função que mostre no console a frase "Hello World!".

function print () {

    let texto4 = "Hello";

    let texto5 = "World";

    console.log (`${texto4} ${texto5}!`);
}

print();

// Exercício 2 - Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
// Requisitos: 100 de Entregas; 100 de Entrevistas Técnicas; 100 de Presença.
// Se os requisitos forem atingidos, mostre no console "Possível monitor(a)."
// Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function monitor () {
    let entregas = 100;

    let entrevistas_tecnicas = 100;

    let presenca = 100;

    let conditionals = 0;

    let result = "Selecionar outro(a) aluno(a).";
    
    if(entregas >= 100) 
    console.log (conditionals ++)

    if(entrevistas_tecnicas >= 100) 
    console.log (conditionals ++)

    if(presenca >= 100) 
    console.log (conditionals ++)

    if(conditionals === 3) 
    console.log (result = "Possível monitor(a).")}

monitor ();

// Exercício 3 - Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

function higher (){

let numero_1 = 5

let numero_2 = 10

let numero_3 = 15

if(numero_1 >= numero_2 && numero_1 >= numero_3)

console.log ("5 é o maior número")

if (numero_2 >= numero_1 && numero_2 >= numero_3)

console.log ("10 é o maior número")

if (numero_3 >= numero_1 && numero_3 >= numero_2)

console.log ("15 é o maior número")}

higher ();

// Exercício 4 - Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".
// Declare as seguintes variáveis dentro da função: Nome; Sobrenome; Idade.

function identificacao () {
    let Nome = "Renan";
    let Sobrenome = "Garcia Gomes";
    let Idade = "26"

    console.log (`Meu nome é ${Nome} ${Sobrenome}, e tenho ${Idade} anos.`);
}

identificacao();