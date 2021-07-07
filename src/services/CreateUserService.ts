import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
};

class CreateUserService {
                                //Caso nao venha nada em admin deixa como 'false' por padrão
    async execute({ name, email, admin=false, password }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error('Email incorreto');
        }
        console.log('email: ' + email);
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error('Usuário já existe');
        }
                                //senha   // salt 
        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });
        await usersRepository.save(user);
        return user;
    }
}


export { CreateUserService }