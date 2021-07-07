import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import {classToPlain} from 'class-transformer'

class ListTagService {
    async execute(){
        const listTagRepositorires = getCustomRepository(TagsRepositories);
        const allTags = await listTagRepositorires.find();

        /*let teste = allTags.map((tag)=>{
            ({...tag, nameCUstom: `#${tag.name}`});
        }); -> o ...tag pega todos os atributos da variável tag, sendo assim a variável teste será um array onde cada objeto terá as mesmas propriedades de uma tag porém com o campo adicional 'customName'*/
        //A classe class transform faz a mesma coisa das linhas comentadas acima porém, durante a recuperação dos dados no BD
        return classToPlain(allTags); //Cria novos objetos com novos campos a partir do decorator @expose presente na entidade
    }
}

export {ListTagService};