import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { Request, Response} from 'express'
class ListUserReceiveComplimentsController{
    async handle(request:Request, response:Response){
        const listUserSendComplimentsService = new ListUserReceiveComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(request.user_id);
        return response.status(200).json(compliments);
    }
}

export {ListUserReceiveComplimentsController}