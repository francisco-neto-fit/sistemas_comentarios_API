import { Request, Response, NextFunction } from "express";
import {verify} from 'jsonwebtoken'


interface IPayload{
    sub:string;
}

export function ensureAuthenticated(request:Request, response:Response, next:NextFunction){
    
    //Recupernaod o token na requisição
    const authToken = request.headers.authorization;     //Baerer Token => authorization:Baerer {token}
    
    //verifica se está faltando o token
    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(' '); // coloca o segundo valor do reotrno na variável 'token'
    
    try{
        //verifica se é token válido
        const decode = verify(token,'ea39ff7c7647a69d28f56e86ff287860');  
        const {sub} = decode as IPayload; // sub = id do usuário 
        request.user_id = sub;
        //Caso seja válido retorna o payload do jwt  na variável decode

        //com o token váliado avança para a próxima função
        return next();
    //caso o token seja inválido, cai dentro do catch
    } catch(err){
        //O end singifica que não precisa ir para  a próxima função
        return response.status(401).end();
    }
    
    
    
}