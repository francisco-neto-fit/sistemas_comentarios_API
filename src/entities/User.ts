import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
@Entity("users") //referenciando a tabela de users no BD
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    admin: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    password: string;

    constructor(){
        if(!this.id ) // se id == null, caso não tenha um id
            this.id = uuid();
    }

}

export {User};
