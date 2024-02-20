console.log ("////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log ("Atividade - Pratica (12)")
// Atividade - Pratica (12)

// Exercício 1 - Escreva uma função que apresente como resultado os quadrados
// dos números inteiros existentes na faixa de valores de 15 a 200.

// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 225, 256, 289 ...40000

function toSquare(){
    for (let contador = 15; contador <= 200; contador++){
        const contagem = contador*contador
        console.log(`contador = ${contagem}`)
    }
}
toSquare()

// Exercício 2 - Escreva uma função que apresente a soma dos cem primeiros números naturais.
// (1+2+3+...+98+99+100).

// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 5.050

function somaDosCemPrimeiros (){
    let soma = 0;
    let resultado = "";

    for (let index = 1; index <= 100; index++) {
        soma += index;
        resultado += `+ ${index}`;
    }
    console.log (`Soma dos cem primeiros números naturais: ${resultado.slice(2)}= ${soma}`);
}

somaDosCemPrimeiros()

// Exercício 3 - Escreva uma função que apresente todos os valores numéricos
// menores que 200 que são divisíveis por 4.

// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196

function menoresQueDuzentos(){
    for (let numero = 0; numero < 200; numero++){
        if (numero % 4 === 0) {
            console.log(numero);
        }
    }
}

menoresQueDuzentos()

// Exercício 4 - Escreva uma função que calcule o resultado da soma e da média
// aritmética dos valores pares situados na faixa numérica de 50 até 70.

// soma = 50+52+54...+70
// média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠ Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: A soma é 660 e a média é 60.

function calculoSomaEMediaAritmetica (){
    
    let soma = 0;
    let contagem = 0;

    for (let numero = 50; numero <= 70; numero++) {

        if (numero % 2 === 0) {
        
            soma += numero;
            
            contagem++;
        }
    }

    const media = soma / contagem;

    console.log (`Soma dos pares: ${soma}`);
    console.log (`Média dos pares ${media}`);
}

calculoSomaEMediaAritmetica()