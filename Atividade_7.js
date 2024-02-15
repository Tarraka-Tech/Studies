// Atividade - Pratica (7)

// Exercício 1 - Seu depurador de código misteriosamente parou de funcionar,
// e agora você precisa descobrir o que deve ser retornado no console.log.
// (lógica fornecido pela Kenzie)

function verificaNumero(num) {
    let str = '';
    
    if (num % 2 == 0) {
      str = 'par';
    } else {
      str = 'impar';
    }
  
    str += ', ';
  
    if (num > 0) {
      str += 'positivo';
    } else {
      str += 'negativo';
    }
  
    str += ' e ';
  
    if (num === parseInt(num)) {
      str += 'não possui casas decimais';
    } else {
      str += 'possui casas decimais';
    }
  
    str = 'O numero ' + num + ' é ' + str;
  
    return str;
  }
  
  console.log(verificaNumero(-12));

// Exercício 2 - O trecho de código abaixo está realizando algumas operações matemáticas, 
// e para se certificar de que todas elas estão funcionando como deveriam,
// o desenvolvedor adicionou alguns logs em seu código.
// (lógica fornecido pela Kenzie)

let valor = 18;
let result = valor / 2;
console.log(result);

result = result / 3;
console.log(result);

let isPair = ( result == 3 );
console.log(isPair);

if (isPair) {
  result = result * 6;
} else {
  result = result * 12;
}

console.log(result);

// Exercício 3 - A função abaixo recebe um número qualquer e 
// retorna a quantidade de algarismo que o compõem.
// Tente descobrir o valor que será retornado em cada console.log()
// sem rodar o código no terminal.
// (lógica fornecido pela Kenzie)

function algarismosEmUmNumero(n){
    let str = `${n}`;
    let contagem = str.length;
    console.log(contagem);
  
    if (n != parseInt(n)) {
      console.log("Entrou aqui");
      contagem = contagem - 1;
    }
  
    console.log(contagem);
  
    return contagem;
  }
  algarismosEmUmNumero(3.141517);