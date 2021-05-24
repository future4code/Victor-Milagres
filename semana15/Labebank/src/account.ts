export type Transaction = {
    value: number,
    date: Date,
    description: string
}


export type Account = {
    name: string,
    cpf: string,
    birthday: Date,
    balance: number,
    statement: Array<Transaction>
}