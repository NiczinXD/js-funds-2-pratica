/*
Nome      : js-pratica1
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 01 O que são arrays
Data      : 10/08/2024
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

console.log("Lista de Exercícios");
pula();
console.log("1-Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.\n".cyan);
const arrExemplo = [, 200, , 300, , , , 700, , ];
console.log(`Array esparso: ${arrExemplo}`)

console.log(arrExemplo);
pare();

console.log("2-Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.\n".yellow);
const listaElemento = [7, 4, 5, 6, 8];
console.log(listaElemento);

listaElemento[0] = 32;
console.log(listaElemento);
pare();

console.log("3-Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.\n".red);
const meuArray = [];
meuArray.push(7, 8, 9)
console.log(meuArray);

meuArray[0] = meuArray[0] * 2;
console.log(meuArray);
pare();

console.log("4-Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.".cyan);
const arrayVazio = []
arrayVazio.push(6, 5, 4);
console.log(arrayVazio);
pare();

console.log("5-Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.");
const clinicaVeterinaria = []
console.log(`A clinica veterinaria esta vazia`);

clinicaVeterinaria.push('cachorro');
clinicaVeterinaria.push('gato');
clinicaVeterinaria.push('coelho');
console.log(`nossos pacientes chegarao muito obrigado por virem ${clinicaVeterinaria}`);

clinicaVeterinaria.pop();
console.log("Coelho foi atendido!")
console.log(`Fila ${clinicaVeterinaria} `);

clinicaVeterinaria.pop();
console.log("Gato foi atendido!")
console.log(`Fila ${clinicaVeterinaria} `);

clinicaVeterinaria.pop();
console.log("Cachorro foi atendido!")
console.log(`Fila ${clinicaVeterinaria} `);

console.log(clinicaVeterinaria);