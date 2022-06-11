import { DateTime } from 'luxon';
import { dateTransformer } from '.';
import {
    BaseEntity, Entity,
    Column, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('counts')
export class Count extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        name: 'created_at',
        type: 'timestamp',
        transformer: dateTransformer,
        default: 'NOW()'
    })
    createdAt!: DateTime;

}