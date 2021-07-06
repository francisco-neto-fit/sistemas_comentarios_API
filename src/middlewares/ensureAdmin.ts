import { Request, Response, NextFunction } from "express";



//Verifica se o usuário admin
export function ensureAdmin(request:Request, response:Response, next:NextFunction){
    const admin = true;
    console.log('aqui');
    if(admin)
        return next(); // executa a próxima função (contreoller.handle)
    return response.status(401).json({error:"Não autorizado"});

}