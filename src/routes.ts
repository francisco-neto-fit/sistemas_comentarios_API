import {Router} from 'express';
import {CreateUserController}  from './controllers/CreateUserController'

const router = Router();

const createUserController = new CreateUserController();

router.post('/users', createUserController.handle); // O node já identifica que tem que ser passado o reuqest e response para o controller não tendo assim que colocar os parâmetros


export {router};