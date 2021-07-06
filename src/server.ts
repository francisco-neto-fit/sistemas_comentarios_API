import express, {Request,Response,NextFunction} from 'express';
import 'reflect-metadata'; 
import './database';
import 'express-async-errors'; // para lançar execoes assincronas, por isso fica antes das rotas
import {router} from './routes';
 //lidar com erros
const app = express();
app.use(express.json()); //indica para o exporess que será usado json

app.use(router); // inserindo as rotas no express

//Middleware pra erro recebe 4 parametros, next: caso queira passa para um próximo nível, ex: caso queira executa outra função
app.use((err: Error, request: Request, response:Response, next: NextFunction)=>{
    if(err instanceof Error){ // tudo que for do Throw new Error
        return response.status(400).json({
            error:err.message
        });
    }
    return response.status(500).json({
       status:'error',
       message: "Internal Server Error" 
    });
});

app.listen(3000, () => console.log(`server is running in port ${3000}` )); // inicializa o servidor na porta 3000

// pra criar nova migration: yarn typeorm migration:create -n CreateTags