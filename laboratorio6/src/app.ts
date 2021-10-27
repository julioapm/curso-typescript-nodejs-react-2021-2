import express from 'express';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import {json} from 'body-parser';
import { router as aloRouter} from './routes/alo.routes'

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(json());
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
    app.use(errorhandler());
} else {
    app.use(morgan('tiny'));
}
//app.use(cors());
app.use(`/api/v${process.env.API_VERSION || '1.0.0'}`, aloRouter);

export default app;

