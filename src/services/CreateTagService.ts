import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"


class CreateTagService {
    async execute(name:string){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error('Nome incorreto');
        }

        //SELECT * FROM TAGS WHERENAME name = 'name' 
        const tagAlreadyExists = await tagsRepositories.findOne({name});

        if(tagAlreadyExists){
            throw new Error('Tag existente');
        }

        const tag = tagsRepositories.create({name});

        await tagsRepositories.save(tag);

        return tag;
    }
}


export {CreateTagService}