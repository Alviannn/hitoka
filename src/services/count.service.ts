import { DateTime } from 'luxon';
import { Raw } from 'typeorm';
import { Count } from '../database/entities/count.entity';

class CountService {

    async getTotal(filterToday = false) {
        const today = DateTime.utc().toFormat('dd-MM-yyyy');

        if (filterToday) {
            return Count.countBy({
                createdAt: Raw(
                    (alias) => `TO_TIMESTAMP(${alias}, 'DD-MM-YYYY') = :today`,
                    { today }
                )
            });
        }

        return Count.count();
    }

    async add() {
        const count = Count.create();
        await count.save();
    }

}

export const countService = new CountService();