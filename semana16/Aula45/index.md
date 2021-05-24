
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


### Exercicio 5

a)  O tipo TEXT é usado para artigos breves.
    ```
    CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
    );
    ```
b)
```
 INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
    );
    ```
  c) 
  ```
      INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
    );
    ```
    d)
    ```
        INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );

    e)
     ```
    INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)

### Exercicio 6

a)
 ```
 SELECT id, title, rating FROM Movie WHERE id = "001";
 ```

 b) 
 ```
  SELECT * FROM Movie WHERE title = "Deus é Brasileiro";
  ```

c) 
```
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

### Exercicio 7

a) 
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie WHERE title LIKE "%Você%" OR synopsis LIKE "Você";
```
c)
```
SELECT * FROM Movie WHERE release_date < "2021-05-24";
```

d) 
```
SELECT * FROM Movie WHERE release_date < "2021-05-24" AND (title LIKE "%Você%" OR synopsis LIKE "%Você%") AND rating > 7;
```

