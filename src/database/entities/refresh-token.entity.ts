import { DateTime } from 'luxon';
import { dateTransformer } from '.';

import {
    BaseEntity, Entity,
    PrimaryColumn,
    CreateDateColumn, DeleteDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('refresh_tokens')
export class RefreshToken extends BaseEntity {

    @PrimaryColumn()
    token!: string;

    @CreateDateColumn({ name: 'created_at', transformer: dateTransformer })
    createdAt!: DateTime;

    @UpdateDateColumn({ name: 'updated_at', transformer: dateTransformer })
    updatedAt?: DateTime;

    @DeleteDateColumn({ name: 'deleted_at', transformer: dateTransformer })
    deletedAt?: DateTime;

}