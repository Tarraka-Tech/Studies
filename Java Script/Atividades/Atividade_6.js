console.log ("////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log ("Atividade - Pratica (6)")
// Atividade - Pratica (6)

// Exercício 1 - Desenvolva uma função com apenas um parâmetro.
// A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function valor_de_caractere (numero){
    
    if (numero > 0) {
        
        return "P"
    
    }
    else (numero <= 0); {
        
        return "N"
    
    }
}

console.log (valor_de_caractere (10));

// Exercício 2 - Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function quantidade_de_numeros (numero){
    
    return numero.toString ().length;

}

console.log (quantidade_de_numeros(1000));

// Exercício 3 - Desenvolva uma função que some dois números passados por parâmetro.
// A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."

function somando_o_maior (numero1, numero2){
    
    if (numero1 > numero2) {
        
        return numero1 + numero2
    
    }
    
    return "O primeiro número não é maior que o segundo"

}

console.log (somando_o_maior (15, 5))

// Exercício 4 - Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra.
// Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true.
// Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function paragrafo (palavra, letra){
    
    if (palavra[0].to_lower_case == letra.to_lower_case){
        
        return "True"
    
    }
        
    return "False"

}

console.log (paragrafo ("Renan", "r"))

// Exercício 5 - Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta.
// Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento."
// Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function horario_de_funcionamento (hora_atendimento){
    
    if (hora_atendimento >= 11 && hora_atendimento <= 23){
    
        return "O /pergunta está em horário de funcionamento."
    
    }
    
    return "O /pergunta não está em horário de funcionamento."

}

console.log (horario_de_funcionamento (13))

