console.log ("////////////////////////////////////////////////////////////////////////////////////////////////////")
console.log ("Atividade - Pratica (TAF)")
// Parametros:

// Categoria "Male";
// let height_M = 1.7;
// let barReps_M = 6;
// let barSeconds_M = 15;
// let abs = 41;
// let runDistance_M1 = 3000;
// let runDistance_M2 = 5000;
// let runTime_M1 = 12*60;
// let runTime_M2 = 20*60;
// let swimDistance = 100;
// let swimTime = 1*60;
// let diveTime = 30;

// Categoria "Famale";
// let height_F = 1.6;
// let barReps_F = 5;
// let barSeconds_F = 12;
// let abs = 41;
// let runDistance_F1 = 4000;
// let runDistance_F2 = 6000;
// let runTime_F1 = 15*60;
// let runTime_F2 = 22*60;
// let swimDistance = 100;
// let swimTime = 1*60;
// let diveTime = 30;

// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
let gender = prompt('Genero');
let height = prompt('Altura');
let barReps = prompt('Repetições com barra');
let barSeconds = prompt('Tempo das repetições com barra');
const abs = prompt('Abdominais');
let runDistance = prompt('Distância da corrida');
let runTime = prompt('Tempo da corrida');
const swimDistance = prompt('Distância da natação');
const swimTime = prompt('Tempo da natação');
const diveTime = prompt(' Tempo de mergulho');

let conditionals = 0;
let result = false;

//Desenvolva seu código aqui:

if(gender == "male")
{
  if(height >= 1.70) 
    console.log (conditionals ++)

  if(barReps >= 6 || barSeconds >=15) 
    console.log (conditionals ++)

  if(abs >= 41) 
    console.log (conditionals ++)
    
  if((runDistance >= 3000 && runTime <= 12*60) || (runDistance >= 5000 && runTime <= 20*60) ) 
    console.log (conditionals ++)

  if((swimDistance >= 100 && swimTime <= 1*60) || diveTime <= 30) 
    console.log (conditionals ++)
    
  if(conditionals === 5) 
    console.log (result = true)
}
//
if(gender == "female")
{
  if(height >= 1.60) 
    console.log (conditionals ++)

  if(barReps >= 5 || barSeconds >=12) 
    console.log (conditionals ++)

  if(abs >= 41) 
    console.log (conditionals ++)
    
  if((runDistance >= 4000 && runTime <= 15*60) || (runDistance >= 6000 && runTime <= 22*60) ) 
    console.log (conditionals ++)

  if((swimDistance >= 100 && swimTime <= 1*60) || diveTime <= 30) 
    console.log (conditionals ++)
    
  if(conditionals === 5) 
    console.log (result = true)
}