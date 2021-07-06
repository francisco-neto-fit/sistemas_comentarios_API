import {Router} from 'express';
import {CreateUserController}  from './controllers/CreateUserController'
import {CreateTagController} from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

//router.use(ensureAdmin); => Todas as rotas abaixo desta linha utilizaram o middlewares 

//post('rota', middleware, middleware, .... , controller) => especificando os middlewares a serem utilizados entre o request e o controller
router.post('/users', createUserController.handle); // O node já identifica que tem que ser passado o reuqest e response para o controller não tendo assim que colocar os parâmetros

router.post('/tags', ensureAdmin,createTagController.handle);

router.post('/session', authenticateUserController.handle );

export {router};