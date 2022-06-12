import authenticate from '../../middlewares/authenticate.middleware';

import { Request, Response } from 'express';
import { sendResponse } from '../../utils/api.util';
import { countService } from '../../services/count.service';
import { validate } from '../../utils/validate.util';
import { countTodayFilterSchema } from '../../validations/count.validation';

import {
    Controller,
    ReqHandler
} from '../../internals/decorators/express.decorator';

@Controller({ path: 'counts', middlewares: [authenticate()] })
export class CountController {

    @ReqHandler('GET', '/')
    async getTotal(req: Request, res: Response) {
        const { today } = validate(req, countTodayFilterSchema);
        const totalCount = await countService.getTotal(today);

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