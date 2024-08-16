/*
Nome      : app02
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 02 Alterando arrays
Data      : 13/08/2024
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

console.log('Lista de Exercícios');

//# 1 ###################################################################################
console.log('1 - Crie uma função que receba dois arrays e os concatene em um único array.\n'.cyan);

const arrayA = [1, 3, 5];
const arrayB = [2, 4, 6];


function recebeArray(array1, array2){
  return array1.concat(array2);
}
console.log(`Array A = ${arrayA}`);
console.log(`Array B = ${arrayB}`);

const array_resultado = recebeArray(arrayA, arrayB);
console.log(`Array Resultado = ${array_resultado}`);

pare();

//# 2 ###################################################################################
console.log('2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.\n'.cyan);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);

console.log(numeros);
console.log(parteNumeros);
pare();

//# 3 ###################################################################################
console.log("3 - Dado o array frutas contendo frutas que desejamos comprar na feira:  const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'] Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.\n".cyan
);

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log("Array dado");
console.log(frutas);

frutas.splice(3, 2, 'Kiwi', 'Pessego');
console.log("Array resultado");
console.log(frutas);
pare();

//# 4 ###################################################################################
console.log('4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.\n'.cyan)

const menuPrincipal = ['Filé a parmegiana', 'Bife', 'Rosbife', 'Arroz'];
console.log(`Menu principal: ${menuPrincipal}`);
const menuSobremesa = ['Brownie', 'Pizza de chocolate', 'Morango', 'Chocolate derretido'];
console.log(`Menu sobremesa: ${menuPrincipal}`);

const menuCompleto = menuPrincipal.concat(menuSobremesa);
console.log(`Menu completo: ${menuCompleto}`);
pare();

//# 5 ###################################################################################
console.log("5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. Dicas:comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;você pode resolver usando um for dentro de outro for.\n".cyan);

let valor = 0;
const arrayBi = [[],[],[]];
console.log(arrayBi); 
for(let x = 0; x <= arrayBi.length - 1; x++) {
  for(let y = 0;y <= 2; y++ ) {
    valor++;
    arrayBi[x].push(valor);
    console.log(arrayBi[x][y]);
  }
}
pare();

//# 6 ###################################################################################
console.log("6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.\n".cyan);

function mostraArray () {
  console.log(arrayBi[0]);
  console.log(arrayBi[1]);
  console.log(arrayBi[2]);
}
console.log(arrayBi[1][2])
pare();

//# 7 ###################################################################################
console.log("7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.\n".cyan);

arrayBi[2][1] = 15;
mostraArray();