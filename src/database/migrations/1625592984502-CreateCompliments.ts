import { Column, MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1625592984502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'compliments',
            columns: [
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true
                },
                {
                    name:'user_sender',
                    type:'uuid',   
                },
                {
                    name:'user_receiver',
                    type:'uuid',   
                },
                {
                    name:'tag_id',
                    type:'uuid',   
                },
                {
                    name:'message',
                    type:'varchar',   
                },
                {
                    name:'created_at',
                    type:'timestamp',  
                    default:'now()' 
                }
            ],
            foreignKeys:[
                {
                        //  Origin / Destiny
                    name:'FKUserSenderCompliments',
                    //NOme da tabela estrangeira
                    referencedTableName:'users',
                    //Nome da coluna na tabela na tabela estrangeira
                    referencedColumnNames:['id'],
                    //Nome da coluna que vai armazenar o atributo estrangeiro
                    columnNames: ['user_sender'],
                    onDelete:'SET NULL',
                    onUpdate:'SET NULL',

                },
                {
                name:'FKUserReceiverCompliments',
                referencedTableName:'users',
                referencedColumnNames:['id'],
                columnNames: ['user_receiver'],
                onDelete:'SET NULL',
                onUpdate:'SET NULL',
            },
            {
                name:'FKTagCompliments',
                referencedTableName:'tags',
                referencedColumnNames:['id'],
                columnNames: ['tag_id'],
                onDelete:'SET NULL',
                onUpdate:'SET NULL',
            },
            ]
        }
        ));

        /* Outra opção, porém teria que ter uma queryRunner na função abaixo especial caso fosse feito desta maneira 
        await queryRunner.createForeignKey(
            'compliments', // a tabela
            new TableForeignKey({
                    //  Origin / Destiny
                    name:'FKUserSenderCompliments',
                    //NOme da tabela estrangeira
                    referencedTableName:'users',
                    //Nome da coluna na tabela na tabela estrangeira
                    referencedColumnNames:['id'],
                    //Nome da coluna que vai armazenar o atributo estrangeiro
                    columnNames: ['user_sender'],
                    onDelete:'SET NULL',
                    onUpdate:'SET NULL',
            })
        );*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments');
    }

}
