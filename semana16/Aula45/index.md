
### Exercicio 1

a) FLOAT é utilizado para colocar números com casas decimais e não inteiros.
 VARCHAR - São strings e colocamos a qtdade de caracteres ao lado que queremos utilizar.
 PRIMARY KEY - identificador unico da tabela.
 DATE - Representa uma data.
 CREATE TABLE - Criar tabela.

b) SHOW DATABASE - Abriu um result grid com Database e meu schema.
    SHOW TABLES - Abriu um result grid mostrando a tabela criada.

c) DESCRIBE Actor - Abriu um result grid mostrando cada item da tabela.





 ### Exercicio 2 

```
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Fala que a chave primária 002 está duplicada.

c)Error Code: 1136. Column count doesn't match value count at row 1
A contagem de colunas não corresponde à contagem de valores na linha 1

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
```
d) Error Code: 1364. Field 'name' doesn't have a default value
    O campo 'nome' não tem um valor padrão
    INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Pericles",
  400000,
  "1949-04-18", 
  "male"
);
```
e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
```
f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Sabrina Sato",
   719333.33,
  "1989-06-26", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Vin Diesel",
  15719333.33,
  "1989-06-26", 
  "male"
);
```



### Exercicio 3
```
a) SELECT * FROM Actor WHERE gender = "female";
```
```
b)  SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
```
c) SELECT * FROM Actor WHERE gender = "invalid";
```   
Todos os valores da tabela retorna null.
```
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
e) Error Code: 1054. Unknown column 'nome' in 'field list'
 nome está escrito errado o correto é name.
```
SELECT id, name from Actor WHERE id = "002"
```


### Exercicio4

a) A query busca na tabela nomes que começam com a letra A ou J que tenham um salário acima de 300000.

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary >= 350000 AND salary <= 900000);