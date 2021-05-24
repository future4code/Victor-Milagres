import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {client} from './client'

const app: Express = express();
app.use(express.json());
app.use(cors());


app.post('/client/create', (req:Request, res:Response) => {
    try {
       const {name, cpf, birthdayAsString} = req.body 
       
       const [day, month, year] = birthdayAsString.split('/')
       const birthday: Date = new Date(`${day}-${month}-${year}`)

       const age:number = Date.now() - birthday.getTime()

       const ageinyears: number = age / 1000 / 60 / 60 / 24 / 365

       if(ageinyears < 18){
           res.statusCode = 406
           throw new Error("Idade para criação de conta deve ser maior que 18 anos.");
           
       }
       
       client.push({
           name,
           cpf,
           birthday,
           balance: 0,
           statement: []
       })

       res.status(201).send("Conta criada com sucesso!")
    } catch (err) {
        res.send(err.message)
    }
})


app.get("/clients/all", (req:Request, res:Response) =>{
    try {
        if(!client.length){
            res.statusCode = 404 
            throw new Error("Nenhuma Conta encontrada!");
            }
       
            res.status(200).send(client)
    } catch (err) {
        res.send(err.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});