//Exercícios de interpretação de código

/*Exercicio 1
a) Será impresso no console os números 10 e 50.
b) Não aparece nada, os numeros dados são apenas armazenados na função.
*/

/* Exercicio 2
a) As informações seriam o restante de nomes do array que não foram solicitados [João, Paulinha , Chija].
b) Seria impresso Amanda e Caio.
 */

 /*Exercicio 3
    Está falando para pegar os números pares do array e incluir no arrayFinal multiplicado por 2.
 */

 //Exercícios de escrita de código

 /*Exercicio 4 

 Exercicio a) */
 
 function sobreMim(){
    console.log("Me chamo Victor, tenho 30 anos, moro em Santos, vou ser Programador Web Full Stack.")
 }
 sobreMim()

/*Exercicio B */
 function sobreMim(nome, idade, cidade, estudante){
        nome = "Victor"
        idade = 30
        cidade = "Santos"
        estudante = true
        return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)
 }

 sobreMim()

 

 /*exercicio 5 */
/* Exercicio a) */
 function soma(num1, num2){
    let resultado = num1 + num2
    console.log(resultado)
 }

 soma(2, 8)



 /*Exercicio b) */
    function numeros(num1, num2){
     if(num1 >= num2){
        boolean = true
        return boolean
     }
 }

const resultado = numeros(8, 5)
console.log(resultado)


/*Exercicio c)*/
function mensagem(corda){
    for(let i = 1; i <= 10; i++){
    corda = "Corda " + i
    console.log(corda)    
    
    }
}
mensagem()


/*Exercicio 6
*/
const arrayi = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function arrayNumeros(array){
    console.log(`${array}`)
    }
arrayi.forEach(arrayNumeros)