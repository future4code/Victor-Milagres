//**Exercícios de interpretação de código**

/* Exercicio 1

Resposta: O código testa se o número inserido pelo usuário é par ou impar.
Se o número for par ele imprime passou no teste, se for impar imprime não passou no teste.

*/

/* Exercicio 2
a) O código serve para mostrar o valor da fruta selecionada pelo usuário.
b) O preço da fruta Maçã é R$ 2.25.
c) o preço que esta no default iria assumir como valor da pêra.
*/

/*Exercicio 3
a) Está pedindo um número para o usuario e convertendo de string para number.
b) Aparecerá a mensagem "Esse número passou no teste", se o numero for -10 irá apresentar um erro.
c) Sim, Ocorre um erro porque a variavel utilizada esta dentro de um escopo que só pode ser usada dentro dele.
*/

//Exercícios de escrita de código

/*Exercicio 4
Vamos criar programas que lidem com entradas do usuário! 
Faça um programa que pergunta ao usuário qual a idade dele e 
imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir!")
}else{
    console.log("Você não pode dirigir!")
}



/*Exercicio 5
Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/
const turnoDoDia = prompt("Qual o período do dia você estuda: Matutino, Vespertino ou Noturno?")

if(turnoDoDia === "Matutino"){
    console.log("Bom Dia!")
}else if (turnoDoDia === "Vespertino"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite")
}

/*Exercicio 6
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/
const turnoDoDia = prompt("Qual o período do dia você estuda: Matutino, Vespertino ou Noturno?")

switch(turnoDoDia){
    case 'Matutino':
    console.log("Bom Dia!")
    break

    case 'Vespertino':
    console.log("Bom Tarde!")
    break

    case 'Noturno':
    console.log("Boa Noite")
    break

    default:
    console.log("Digite um período válido!")
}


/*Exercicio 7
Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia
e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/
const filme = prompt("Qual gênero de filme que irá assistir?")
const preco = Number(prompt("Qual o valor máximo que irá pagar no ingresso?"))

if(filme === "fantasia" && preco <= 15){
    console.log("Bom Filme!")
}else{
    console.log("Escolha outro filme :(")
}


/*Desafio 1
Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo prompt que snack ele vai comprar (pipoca, chocolate, doces, etc)
e imprima no console as mensagens "Bom filme!" e "... com [SNACK]", 
trocando [SNACK] pelo que o usuário colocou no input.
*/
const filme = prompt("Qual gênero de filme que irá assistir?")
const preco = Number(prompt("Qual o valor máximo que irá pagar no ingresso?"))

if(filme === "fantasia" && preco <= 15){
    const snack= prompt("Gostaria de comprar um snack: lanche, chocolate ou doce?")
    if(snack === 'lanche' || 'chocolate' || 'doce')
    console.log(`Bom filme! Aqui está seu ${snack}!`)
}else{
    console.log("Escolha outro filme :(")
}


