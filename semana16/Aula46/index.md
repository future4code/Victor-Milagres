### Exercicio 1 

a) Irá deletar a coluna salário  da tabela Actor.

b) Está alterando a coluna de gender para sex COM VARCHAR(6).

c) Está alterando gender por gender com VARCHAR(255).

d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercicio2

a)
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```
c)
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
```
d)
```
Coluna desconhecida 'país' na 'lista de campos'.
Não exite a coluna solicitada.
UPDATE Actor SET country = "Brasil" WHERE id = "010";
```

### Exercicio 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) 
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

### Exercicio 4

a)
```
SELECT MAX(salary) FROM Actor
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```
SELECT SUM(salary) FROM Actor
```

### Exercicio 5

a) Retornou a quantos atores ou atrizes são do genero female. 
```
| COUNT(*) | gender |
|    3     | female |
```
b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor ORDER BY salary;
```
d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

# Exercicio 6

a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```
UPDATE Movie SET playing_limit_date = "2020-05-25" WHERE id = "001"
UPDATE Movie SET playing_limit_date = "2002-06-18" WHERE id = "002"
```
d)
```
DELETE FROM Movie WHERE id = "003"
UPDATE Movie SET synopses = "bla bla bla" WHERE id = "003";
'Sinopse' da coluna desconhecida na 'lista de campos'. 
Não encontra a coluna de sinopse.
```

### Exercicio 7

a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b)
```
SELECT AVG(rating) FROM Movie;
```
c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d) 
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e) 
```
SELECT MAX(rating) FROM Movie;
```
f) 
```
SELECT MAX(rating) FROM Movie;
```

### Exercicio 8

a)
```
SELECT * FROM Movie ORDER BY title;
```
b)
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```
c)
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```