import { PrimaryColumn, Column } from "typeorm"

class Compliments{
    @PrimaryColumn()
    readonly id:string;

    
    user_sender:string;


}

export {Compliments}