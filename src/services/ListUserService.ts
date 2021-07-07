import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import {classToPlain} from 'class-transformer'

class ListUserService {
    async execute(){
        const listUSersRepositorires = getCustomRepository(UsersRepositories);
        const allUsers = await listUSersRepositorires.find();
        return classToPlain(allUsers);
    }
}

export {ListUserService};