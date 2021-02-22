/* Exercicios de interpretação de código 

Exercicio 1
a = 10
b = 10

console.log(b)
Será impresso o numero 10

b = 5
console.log(a, b)
Será impresso os numeros 10, 5.

Exercicio 2
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

Será impresso 10, 10, 10

*/

//Exercícios de escrita de código
// 1 a) Declare uma variável para armazenar um nome, sem atribuir um valor.

    let nome

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    let idade

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
    console.log(typeof nome)
    console.log(typeof idade)

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Resposta: Foi impresso undefined pois não foi atribuido nenhum valor as variaveis de nome e idade.

//d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt('Qual o seu nome?')
console.log(nome)

idade = prompt('Qual a sua idade?')
console.log(idade)

//e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome)
console.log(typeof idade)
//Resposta: As duas variáveis apresentam o tipo string. notei que idade não recebe o tipo number.

//f) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log('Olá ' + nome + ', você tem ' + idade + ' anos.')

//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:
    let animal = prompt('Qual seu animal favorito?')
    console.log('Resposta: Seu animal favorito é', animal)

    let cor = prompt('Qual sua cor favorita?')
    console.log('Resposta: Sua cor favorita é', cor)

    let serie = prompt('Qual sua série favorita?')
    console.log('Resposta: Sua série favorita é', serie)

    let filme = prompt('Qual seu filme favorito?')
    console.log('Resposta: Seu filme favorito é', filme)

    let esporte = prompt('Qual seu esporte favorito?')
    console.log('Resposta: Seu esporte favorito é', esporte)

//3.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//a) Imprima na tela o array completo
let comidas = ["Churrasco","Pastel","Strogonoff","Pizza","Feijoada"]
console.log(comidas)
//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log('Essas são minhas comidas preferidas:', comidas)
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

let comidaUsuario = prompt('Fulano, qual sua comida preferida?')

comidas[1] = comidaUsuario

console.log(comidas)

// 4.Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
// a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.

let perguntas = ["Você está com calor?","Você gosta de viajar?", "Você Joga video game?"]

let resposta = ["false" , "true", "true"]

console.log(perguntas[0],resposta[0],perguntas[1],resposta[1],perguntas[2],resposta[2])