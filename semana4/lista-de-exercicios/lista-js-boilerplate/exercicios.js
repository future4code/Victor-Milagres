//Exercício 1
function inverteArray(array) {
   let arrayInvertido = [];
   for(let i = array.length - 1; i >= 0; i-- ) {
       arrayInvertido.push(array[i])
     }
   return arrayInvertido
   }
  



//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   const numeros = [1, 2, 3, 4, 5, 6]
   const elevado = []
   for(numero of numeros){
      if(numero % 2 === 0){
         elevado.push(Math.pow(numero, 2))
      }
   }
return elevado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
const newArray = []
for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
        newArray.push(arrayOriginal[i])
    }
    return newArray
}


}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   const lista = [100, 11, 12, 15, 18, 59, 21, 23, 25, 27, 30]
   let maiorNumero = 0
   for(let numero of lista){
     if(numero > maiorNumero){
        maiorNumero = numero 
     }
     console.log(maiorNumero)
  }
}

//Exercício 5
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const array = [];
   for(let i = 0; array.length < n; i++) {
    if(i % 2 === 0) {
      array.push(number)
    }
   }
   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {

  if ( a === b && b === c){
  return "Triângulo Equilátero";      
}else if(a !== b && b !== c && c !== a){
   return "Triângulo Escaleno!"; 
}else{
   return "Triângulo Isósceles";
   }
}
// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   array = [3,5,1,7,3,9,10]
   array.sort(function(a,b){
      return a - b
   })
   var num = ''
   for (let i = 0; i < array.length; i++){
      num += array[i] + ','
   }
   return num
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme

}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
  
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const retangulo = {
      largura: lado1,
       altura: lado2,
       perimetro: 2 * (lado1 + lado2),
       area: lado1 * lado2
     }
   
     return retangulo
}

// Exercício 15

const pessoa = {
	nome: "Ortega",
	idade: 22,
	email: "Ortega@gmail.com.br",
	endereco: "Rua dos gols, 44"
}

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   return {
      ...pessoa, 
      nome: 'ANÔNIMO'
     }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}