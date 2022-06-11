import { Request, Response } from 'express';
import { sendResponse } from '../../utils/api.util';
import { countService } from '../../services/count.service';

import {
    Controller,
    ReqHandler
} from '../../internals/decorators/express.decorator';

@Controller({ path: 'counts' })
export class CountController {

    @ReqHandler('GET', '/')
    async getTotal(_: Request, res: Response) {
        const totalCount = await countService.getTotal();
        return sendResponse(res, {
            message: 'Successfully get total people counts',
            data: { totalCount }
        });
    }

    @ReqHandler('POST', '/')
    async addCount(_: Request, res: Response) {
        await countService.add();

        return sendResponse(res, {
            message: 'Incremented current count'
        });
    }

}