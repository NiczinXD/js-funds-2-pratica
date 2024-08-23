/*
Nome      : app03
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 03 Laços de repetição
Data      : 18/08/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');

console.clear();

function pare(){
  console.log();  
  const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
  if(ordem==9){
    console.log('End-of-Job'.green);  
    process.exit();
  }   
  console.clear();
}  

function ok() {
  console.log("ok");  
}  

function pula() {
  console.log("");  
}

console.log('Lista de Exercícios\n'.yellow);

// 1 ###########################################################################################################################################
console.log('1 - Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.\n'.cyan);
const array1 = [1, 2, 3, 4, 5];

for(const elemento of array1){
  console.log(elemento);
}
pare();

// 2 ###########################################################################################################################################
console.log('2 - Crie uma função que receba uma array e imprima no console o número do índice e o elemento.\n'.cyan);
const array = [1, 7, 14, 8, 54];

function recebeArray(array){

  for(const elemento of array){
    console.log(`indice = ${array.indexOf(elemento)} elemento = ${elemento}`);
  }
  console.log("");
  for(let i = 0; i < array.length; i++) {
    console.log(`indice = ${i} elemento = ${array[i]}`);

  }

}
recebeArray(array);
pare();

// 3 ###########################################################################################################################################
console.log('3 - Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.\n'.cyan);
function somaElementos(array){
  let soma = 0;
  for(numero of array){
    soma += numero;
  }
  console.log(soma)
}

const arrayQualquer = [1, 2, 3, 4, 5, 6];
somaElementos(arrayQualquer);
pare();

// 4 ###########################################################################################################################################
console.log("4 - Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.\n".cyan);
const arrayNumeros = [100, 1, 3, 8, 11, 80];
let maiorValor = 0;
let menorValor = 0;
function maiorEMenor(array){

  for(let elemento of array){
    if(elemento > maiorValor){
      maiorValor = elemento;
    }
  }
  menorValor = maiorValor;
  for(let elemento of array){
    if(elemento < menorValor){
      menorValor = elemento;
    }
  }


}
maiorEMenor(arrayNumeros);
console.log(`Maior valor = ${maiorValor} Menor valor = ${menorValor}`);
pare();

// 5 ###########################################################################################################################################
console.log('5 - Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.\n'.cyan);
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (const numero of numeros) {
  if(numero % 2 === 0){
    console.log(numero);
  }
}
pare();

// 6 ###########################################################################################################################################
console.log('6 - Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.\n'.cyan);
function achaMedia(array){
  let soma = 0;
  for(numero of array){
    soma += numero;
  }
  console.log(soma);

  let media = soma / array.length;
  console.log(media);
}

const arrayComNumeros = [1, 3, 7, 8, 9, 10]
achaMedia(arrayComNumeros);
