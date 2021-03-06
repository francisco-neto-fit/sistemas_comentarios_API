import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceiveComplimentsService{
    async execute(user_id: string){
        const complimentsRespositories = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRespositories.find({where:{
            user_receiver:user_id
        },
    relations:['userSender','userReceiver','tag'], // Passa esses objetos por json na resposta tmb
});
        return compliments;
    }
}

export{ListUserReceiveComplimentsService}