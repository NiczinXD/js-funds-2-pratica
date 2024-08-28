/*
Nome      : app04
Finalidade: Curso de JavaScript: conhecendo arrays
Observação: 04 Funções callback
Data      : 24/08/2024
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

// 1 #######################################################
console.log('1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.\n'.cyan);
const arrayBonitinho = [2, 7, 90, 20];

arrayBonitinho.forEach((i, elemento) => {
  console.log(i, elemento);
});
pare();

// 2 #######################################################
console.log('2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.\n'.cyan);
const arrayMatematico1 = [5, 0, 7, 9, 11];
console.log(arrayMatematico1);

const arrayMatematico2 = [15, 10, 17, 19, 111];
console.log(arrayMatematico2);

function executaOperacaoEmArray(lista, funcao){
  lista.forEach(funcao);
}

function soma(elemento){
 console.log(`array1 = ${elemento + 1}`);
}

function multiplica(elemento){
 console.log(`array2 = ${elemento * 2}`);
}

executaOperacaoEmArray(arrayMatematico1, soma);
executaOperacaoEmArray(arrayMatematico2, multiplica);


pare();

// 3 #######################################################
console.log('3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".\n'.cyan);
const arrayComValores = [7, 9, 32, 90, 68];
const numeroPesquisar = 13;
let numeroAchado = -1;
let indiceNumeroAchado = -1;

for(let i = 0; i < arrayComValores.length; i++) {
  if(arrayComValores[i] == numeroPesquisar) {
    numeroAchado = arrayComValores[i];
    indiceNumeroAchado = i;
  }
}

if(numeroAchado != -1) {
  console.log(numeroAchado);
}
console.log(indiceNumeroAchado);



pare();

// 4 #######################################################
console.log("4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B. const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida']; const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.\n".cyan);
const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida'];
console.log(nomesTurmaA);
const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];
console.log(nomesTurmaB);

const nomeDeTodosOsAlunos = nomesTurmaA.concat(nomesTurmaB);
console.log(nomeDeTodosOsAlunos);

const alunoPraAchar = nomeDeTodosOsAlunos.find(nome => nome === 'marta');
if(alunoPraAchar){
  console.log(`O aluno ${alunoPraAchar} esta sim aqui!`);
} else{
  console.log('aluno nao encontrado');
}
pare();

// 5 #######################################################
console.log("5 - Considere um array de números inteiros. const numeros = [6, 9, 12, 15, 18, 21]; Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.\n".cyan);
const numeros = [6, 9, 12, 15, 18, 21];
console.log(numeros);

numeros.forEach(numero => {
  const resultado = numero * 3;
  console.log(resultado);
});

const x = numeros.findIndex(achaNumero);
function achaNumero(numero){
  return numero == 18
}
console.log(x);
