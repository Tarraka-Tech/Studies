console.log ("////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log ("Atividade - Pratica (10)")
// Atividade - Pratica (10)

// Exercício 1 - Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. 
// A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova.
// Então, a função deve retornar a nova frase com o resultado da substituição.

function paragrafo (frase, palavra_antiga, palavra_nova){

    const nova_frase = frase.replaceAll(palavra_antiga, palavra_nova)
    
    return nova_frase
}

console.log (paragrafo ("Eu comprei no mercado Morumbi, em qual mercado vc foi para comprar?", "mercado", "Shopping"))

// Exercício 2 - Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3,
// que representam as notas de um aluno em três avaliações.
// A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.

// A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>."

function media_aritmetica (nota1, nota2, nota3) {
    
    const media = (nota1 + nota2 + nota3) /3;
    
    const resultado_media = media.toFixed();
    
    return resultado_media;
}

console.log (media_aritmetica (7, 9, 10))

// Exercício 3 - Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade,
// que representam o valor unitário de um produto e a quantidade comprada, respectivamente.
// A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e
// formatando o resultado com duas casas decimais.

// O desconto será aplicado de acordo com a quantidade comprada:
// 10% de desconto se a quantidade comprada for maior ou igual a 5;
// 20% de desconto se a quantidade comprada for maior ou igual a 10.

// Em seguida, a função deve substituir o ponto por vírgula na string do valor total,
// e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>."

function valor_total (valor_unitario, quantidade) {
    
    let valor_compra = 0;

    if (quantidade >= 10){
        
        valor_compra = (quantidade*valor_unitario) * 0.8

    }
    
    else if (quantidade >= 5){

        valor_compra = (quantidade*valor_unitario) * 0.9

    }
    
    else {

        valor_compra = (quantidade*valor_unitario)
    
    }
    
    return valor_compra.toFixed (2)
}

console.log (valor_total (10,15));