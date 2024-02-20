console.log ("////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log ("Atividade - Pratica (11))")
// Atividade - Pratica (11)

// Exercício 1 - Escreva uma função chamada renderUpToTwenty.
// Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.

function renderUpToTwenty (){
    for (let contador = 0; contador <= 20; contador++){
        console.log(`contador = ${contador}`)
    }
}
renderUpToTwenty()

//
console.log ("/////////////////////////")
//

// Exercício 2 - Escreva uma função chamada tenInTenToAHundred(). 
// Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.

function tenInTenToAHundred (){
    for (let contador = 10; contador <= 100; contador+=10){
        console.log(`contador = ${contador}`)
    }
}
tenInTenToAHundred()

//
console.log ("/////////////////////////")
//

// Exercício 3 - Escreva uma função chamada oddUpToTwenty().
// Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.

function oddUpToTwenty(){
    for (let contador = 0; contador <= 20; contador++){

        if (contador % 2 != 0){
            console.log (`O número ${contador} é impar`)
        }
    }
}
oddUpToTwenty()

//
console.log ("/////////////////////////")
//

// Exercício 4 - Escreva uma função chamada evenUpToTwenty().
// Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.

function evenUpToTwenty(){
    for (let contador = 0; contador <= 20; contador++){

        if (contador % 2 == 0){
            console.log (`O número ${contador} é par`)
        }
    }
}
evenUpToTwenty()

//
console.log ("/////////////////////////")
//

// Exercício 5 - Escreva uma função chamada fromNegativeToPositive().
// Quando a função for chamada, apresente os valores de -10 a 0.

function fromNegativeToPositive(){
    for (let contador = -10; contador <= 0; contador++){
        console.log(`contador = ${contador}`)
    }
}
fromNegativeToPositive()

//
console.log ("/////////////////////////")
//

// Exercício 6 - Escreva uma função chamada inDescendingDirection.
// Quando a função for chamada, apresente valores de 10 a 0 no console.

function inDescendingDirection(){
    for (let contador = 10; contador >= 0; contador--){
        console.log(`contador = ${contador}`)
    }
}
inDescendingDirection()

//
console.log ("/////////////////////////")
//

// Exercício 7 - Escreva uma função chamada toSquare().
// Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.

function toSquare(){
    for (let contador = 0; contador <= 10; contador++){
        const contagem = contador*contador
        console.log(`contador = ${contagem}`)
    }
}
toSquare()