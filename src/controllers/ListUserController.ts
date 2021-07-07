import {Request, Response} from 'express';
import { ListUserService } from '../services/ListUserService';

class ListUserController{
    async handle(request:Request, response:Response){
        const listUserservice = new ListUserService();
        const users = await listUserservice.execute();
        return response.json(users)
    }
}

export {ListUserController}