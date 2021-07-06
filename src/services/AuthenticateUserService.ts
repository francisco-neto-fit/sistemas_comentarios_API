import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserService {
    email:string,
    password:string
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticateUserService){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error('Email/Senha Incorreto');
        }

       const passwordMath = await compare(password,user.password);

       if(!passwordMath){
            throw new Error('Email/Senha Incorreto');
        }

        const token = sign({email:user.email},'ea39ff7c7647a69d28f56e86ff287860',{subject:user.id,expiresIn:'1d'});

        return token;

    }
}

export {AuthenticateUserService}