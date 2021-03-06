import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UserRepositories";


interface IComplimentRequest{
    tag_id:string;
    user_receiver:string;
    user_sender:string;
    message:string;
}
class CreateComplimentService{
    async execute({tag_id,user_receiver,user_sender,message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(user_sender == user_receiver){
            throw new Error('Usuário destino inválido')
        }
        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error('Usuário destino não existe');
        }

        const compliment = complimentsRepositories.create({tag_id,user_receiver,user_sender,message});

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export {CreateComplimentService}