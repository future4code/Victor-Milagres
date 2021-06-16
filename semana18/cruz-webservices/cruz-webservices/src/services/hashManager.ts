import * as bcrypt from "bcryptjs";

export const hash = async (s:string): Promise<string> => {

    //definindo a complexidade/cost
    const rounds: number = Number(process.env.BCRYPT_COST);

    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("O cost precisa ser um número");
    }

    //gerar o salt    
    const salt = await bcrypt.genSalt(rounds);

    //esconder o nosso tesouro.
    const result = await bcrypt.hash(s, salt);

    return result;
}

export const compare = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
} 