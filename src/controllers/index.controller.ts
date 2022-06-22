import { Router } from 'express';
import path from 'path';

const router = Router();

function getViewPath(name: string) {
    return path.join(process.cwd(), 'views', `${name}.html`);
}

router.get('/', async (_, res) => {
    return res.sendFile(getViewPath('index'));
});

router.get('/counter', async (_, res) => {
    return res.sendFile(getViewPath('people_counter'));
});

router.get('/incremental', async (_, res) => {
    return res.sendFile(getViewPath('increase_people'));
});

export default router;