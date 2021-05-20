import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserTypes {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!!!!")
})

//Exercicio 1
//a) Método Get
//b) A entidade será users.
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

//Exercicio 2
//a) por path params
//b) utilizei o enum UserType
app.get("/users/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type.toUpperCase();

    if (type !== UserTypes.ADMIN && type !== UserTypes.NORMAL) {
      throw new Error("type admin or normal");
    }

    const result = users.filter((user) => user.type === type);

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


// Exercicio 3
//a) query params
//b) mensagem está no código.
app.get("/users/search/", (req: Request, res: Response) => {
  try {
    const name = String(req.query.name).toLowerCase();

    if (!name) {
      throw new Error("put a parameter");
    }

    const result = users.filter((user) => user.name.toLowerCase() === name);

    if (!result) {
      throw new Error("Error user not found");
    }

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
