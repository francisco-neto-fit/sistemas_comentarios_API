import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";


//Caso precise adicionar mais uma coluna, ou no caso adicionar uma tabela, se cria uma nova migration (como essa), e adiciona as alterações 
export class ALterUserAddPassword1625587808728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'password',
                type: 'varchar',
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users','password');
    }

}
