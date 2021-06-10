### Exercicio 1

a)
Round é um fator mumérico que influencia no tempo de execução do algoritmo. Salt é um dado aleatório que é usado como uma entrada adicional para uma função unidirecional que quebra os dados, uma senha ou frase-passe. Eu utilizei o valor 12 porque é utilizado na grande maioria das libs.

### Exercicio 2

a)
Devemos modificar primeiro o signup de forma que a senha esteja criptografada e podermos fazer os testes na função de login.

d)
Não é necessário, este endpoint não lida diretamente com a senha do usuário. A validação dele acontece através do token informado no header da requisição.