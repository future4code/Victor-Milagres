
/*
1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
a.  false
b.  false
c.  true
e.  boolean
*/

/*
2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
a. undefined
b.null
c. 11
d. 3
e. array(11)
f. 9
*/ 

//Exercícios de escrita de código
/*
1.
Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
*/

let idadeUsuario = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
let idadenum = parseInt(idadeUsuario)
let idadenum2 = parseInt(idadeAmigo)

let comparacao = idadenum > idadenum2
console.log("Sua idade é maior do que a do seu melhor amigo? ", comparacao)
console.log(typeof idadenum)

/*
2.
Faça um programa que:
a. Peça ao usuário que insira um número par.
b. Imprima na tela o resto da divisão desse número por 2.
c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

let numeroPar = prompt("Insira um numero par:")
let numeroParDado = parseInt(numeroPar)

numeroParDado %= 2
console.log(numeroParDado)

//O padrão do restante dos numeros pares sempre o resultado será 0. Com numero ímpar o restante sempre será 1.

/* 
3. Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela
*/

let listaDeTarefas = []
let tarefa1 = prompt("Me conte 1 tarefa que você tenha hoje:")
let tarefa2 = prompt("Me conte outra tarefa que você tenha hoje:")
let tarefa3 = prompt("Me conte a última tarefa que você tenha hoje:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indiceUsuario = prompt("Dê o número da tarefa realizada 0, 1 ou 2:")
listaDeTarefas.splice(0, 1)
console.log(listaDeTarefas)

/* 
4.Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
*/


let nome = prompt("Qual o seu nome?")
let email = prompt("Qual o seu e-mail:")

console.log(` O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)



/* DESAFIOS
Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
*/

exercicioA = (77 - 32) * 5/9 + 273.15

console.log(exercicioA, "K")

exercicioB = 80 * 9/5 + 32
console.log(exercicioB, "°F")

exercicioCFahrenheit = 30 * 9/5 + 32
console.log(exercicioCFahrenheit, "°F")

exercicioCKelvin = (86 - 32) * 5/9 + 273.15
console.log(exercicioCKelvin, "K")

let grausUsuario = prompt("Dê um número em °C:")
let valorUsuario = parseInt(grausUsuario)

exercicioD = grausUsuario * 9/5 + 32
console.log(exercicioD, "°F")



/*
2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
    Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
*/

let quilowattHora = 0.05
let residencia = 280
let valorTotal = quilowattHora * residencia
console.log("O valor total a ser pago é : ", valorTotal)

