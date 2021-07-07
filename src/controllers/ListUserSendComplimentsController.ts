import {Request,Response} from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

class ListUserSendComplimentsController{
    async handle(request:Request, response:Response){
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(request.user_id);
        return response.status(200).json(compliments);
    }
}

export {ListUserSendComplimentsController}