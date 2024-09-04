/*
Nome      : app05
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 05 Avançando em arrays
Data      : 30/08/2024
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

// 1 #####################################################################################
console.log('1- Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator. Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).\n'.cyan);
function funcaoExemplo(...array){
  return [].concat(...array);
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const arrayComContanecao = funcaoExemplo(array1, array2, array3);
console.log(arrayComContanecao);
pare();

// 2 #####################################################################################
console.log('2- Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.\n'.cyan);
const valores = [7, 8.5, 4.5, 7.8, 0.2];
const resultado = valores.reduce((acumulador, elementos) => acumulador + elementos, 0);
console.log(resultado);
pare();

// 3 #####################################################################################
console.log("3- Considere duas listas de cores: const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'] Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.\n".cyan);
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
console.log(coresLista1);
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
console.log(coresLista2);

const coresUnificadas = coresLista1.concat(coresLista2);
console.log(coresUnificadas);

const coresUnificadasV2 =  new Set(coresUnificadas);
console.log(coresUnificadasV2);
pare();

// 4 #####################################################################################
console.log('4- Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.\n'.cyan);
const numeroSupimpa = [1, 2, 3, 4, 5, 6, 8];
console.log(numeroSupimpa);

function achaNumeroPar(numero){
for (const numeros of numero){
    if(numeros % 2 === 0){
        console.log(numeros);
    }
 }
}
console.log(achaNumeroPar(numeroSupimpa));
pare();

// 5 #####################################################################################
console.log('5- Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.\n'.cyan);
const numeroMultiplo = [12, 10, 15, 6, 20];

function achaMultiplos(array){
  return array.filter(num => num % 3 === 0 && num > 5); 
}

console.log(achaMultiplos(numeroMultiplo));
pare();

// 6 #####################################################################################
console.log('6- Crie uma função que receba um array de números e retorne a soma de todos os elementos.\n'.cyan);
function somaNumeros(array){
  let soma = 0;
  for(numero of array){
    soma += numero;
  }
  console.log(soma)
}

const arrayNumeros = [1, 3, 4.5, 7, 90];
console.log(somaNumeros(arrayNumeros));