import {Request, Response} from 'express';
import {CreateUserService} from '../services/CreateUserService'


class CreateUserController {
    async handle(request: Request, response: Response){ // express por padrão não tem suporte para erros assíncronos, sendo assim precisa baixar a biblioteca 'express-async-errors'
        
        const {name, email, admin} = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name,email,admin});
        return response.json(user);
    }
}

export {CreateUserController};