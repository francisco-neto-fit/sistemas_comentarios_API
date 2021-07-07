declare namespace Express{ //Sobcrescrevendo a biblioteca => pega toda a tipagem em node_modules/@types/express/index.d.ts e incrementa com o que foi inserido aqui
    export interface Request{
        user_id:string;
    }
}