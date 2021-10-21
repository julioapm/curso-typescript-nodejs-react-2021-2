import express from 'express';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import { json } from 'body-parser';
import { router as aloRouter} from './routes/alo.routes';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(json());
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
    app.use(errorHandler());
} else {
    app.use(morgan('tiny'));
}
app.use(`/api/v${process.env.API_VERSION}`, aloRouter);
export default app;