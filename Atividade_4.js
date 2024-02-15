// Atividade - Pratica (4)

// Exercício 1 - Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30,
// e imprima na tela se a soma de A + B é menor que C.

let a = 10;
let b = 20;
let c = 30;
let resultado = a + b

if (resultado <= c) {console.log ("A soma é menor que C!")}

// Exercício 2 - Faça um algoritmo declarando uma variável com um valor numérico qualquer
// e informe na tela se esse numero é par ou ímpar.

let variavel = 4;

if (variavel % 2 == 0) {console.log ("Par")} else {console.log ("Impar")};

// Exercício 3 - Declare duas variáveis que armazenam valores boleanos(lógicos)
// e então determine se ambos são VERDADEIROS ou FALSOS.

let variavel_a = 10;
let variavel_b = 10;

if (variavel_a && variavel_b) {

    console.log ("True")

}

else {
    
    console.log ("False")

};

// Exercício 4 - Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

let valor_1 = 10
let valor_2 = 13
let valor_3 = 16

if (valor_1 < valor_2 && valor_2 < valor_3) {

    console.log (valor_3 + "->" + valor_2 + "->" + valor_1)

}

// Exercício 5 - Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.
// Dica: Para alertar você pode utilizar a função alert(), ou se preferir
// mostre no console através da função console.log()

let variaveis_1 = 10
let variaveis_2 = 20

if (variaveis_1 > variaveis_2) {
    
    console.log ("Variavel_1 é maior que Variavel_2")

}

else {
    
    console.log ("Variavel_2 é maior que Variavel_1")

}