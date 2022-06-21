import { MigrationInterface, QueryRunner } from "typeorm"
import { authService } from "../../services/auth.service"

export class userSeed1655821810553 implements MigrationInterface {

    public async up(runner: QueryRunner): Promise<void> {
        const insertQuery = 'INSERT INTO users (full_name, email, phone, password) VALUES ($1, $2, $3, $4)';
        const { hashPassword } = authService;

        await runner.query(
            insertQuery,
            ['Alvian D.Q.', 'alviandq@gmail.com', '12345678', await hashPassword('Alvian123?')]
        );
        await runner.query(
            insertQuery,
            ['Device', 'device@iot_device.com', '', await hashPassword('iotDevice91!')]
        );
    }

    public async down(runner: QueryRunner): Promise<void> {
        const deleteQuery = 'DELETE FROM users WHERE email = $1';

        await runner.query(deleteQuery, ['alviandq@gmail.com']);
        await runner.query(deleteQuery, ['device@iot_device.com']);
    }

}
