import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import handleLogging from './middlewares/logger.middleware';
import config from './configs/config';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import path from 'path';

import indexRouter from './controllers/index.controller';

const app = express();

// global middlewares
app.use(compression());
app.use(helmet());
app.use(cors(config.cors));
app.use(cookieParser());
app.use(express.json());
app.use(handleLogging);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views/'));

app.use(express.static(path.resolve('./public/')));

app.use('/', indexRouter);

export default app;