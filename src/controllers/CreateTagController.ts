import {Request,Response} from 'express'
import {CreateTagService} from '../services/CreateTagService'


class CreateTagController{
    async handle(request:Request, response:Response){
        /**
         * Pega direto o campo 'name' do body e coloca na variável 'name'
         * Para evitar de fazer:
         * const name; 
         * const data = request.body
         * data.name = name
         */
        const {name} = request.body;
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export {CreateTagController}