import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619810355505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                       name: "id",
                       type: "uui",
                       isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()", //toda alteração feita, terá o horário alterado automaticamente.
                    },
                    {
                        name: "created_at",
                        type: "timestamp", //forma de representação de data
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings"); //revert o up 
    }
}
