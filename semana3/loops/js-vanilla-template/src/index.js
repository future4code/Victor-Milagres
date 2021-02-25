//Exercícios de interpretação de código

/*Exercicio 1 
O código esta incrementando conforme a condição dada e posteriormente é somado o index no valor.
o Resultado impresso no console é 10.
*/


/*Exercicio 2
a) Vai ser impresso no console os numeros maiores do que 18.
São os seguintes numeros 19, 21, 23, 25, 27, 30.

b) Sim é suficiente. Exemplo abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let numeros
for (let numero of lista) {
    if (numero > 18){
        numeros = numero
		console.log(numero)
    }
}


*/

/*Desafio 1
Ele adicionaria um 0 a cada linha impressa.
*/


//Exercícios de escrita de código


/*Exercicio 3 
a. Escreva um programa que:
 Imprima cada um dos valores do array original.*/

const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
let numero

for(numeros of arrayOriginal){
    numero = numeros
    console.log(numero)
}

/*b. Escreva um programa que:
Imprima cada um dos valores do array original divididos por 10*/
const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
let numero

for(numeros of arrayOriginal){
    numero = numeros / 10
    console.log(numero)
}

/*
c. Escreva um programa que:
Crie um novo array contendo, somente, os números pares do array original.
Imprima esse novo array */

const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
const newArray = []
for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
        newArray.push(arrayOriginal[i])
    }
}
console.log(newArray)



/*d. Escreva um programa que: 
imprima o index e os valores do array da seguinte forma: "O elemento do índex i é: numero"*/

const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
for(let i = 0; i < arrayOriginal.length; i++){
    console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}


/*e. Escreva um programa que imprima no console o maior e o menor números contidos no array original */

const arrayOriginal = [100, 205, 280, 80, 52, 43, 25, 505, 10]
let maiorNumero = 0
let menorNumero = arrayOriginal[0]
for (let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] > maiorNumero){
        maiorNumero = arrayOriginal[i]
    }else if(arrayOriginal[i] < menorNumero){
        menorNumero = arrayOriginal[i]
    }
}
console.log(`O maior número do array é ${maiorNumero} e o menor é ${menorNumero}`)


