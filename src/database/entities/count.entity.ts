import { DateTime } from 'luxon';
import { dateTransformer } from '.';
import {
    BaseEntity, Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn
} from 'typeorm';

@Entity('counts')
export class Count extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn({ name: 'created_at', transformer: dateTransformer })
    createdAt!: DateTime;

}