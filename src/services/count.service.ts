import { Count } from '../database/entities/count.entity';

class CountService {

    async getTotal() {
        const total = await Count.count();
        return total;
    }

    async add() {
        const count = Count.create();
        await count.save();
    }

}

export const countService = new CountService();