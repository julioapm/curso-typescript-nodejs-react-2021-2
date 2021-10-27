import express from 'express';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import {json} from 'body-parser';
import passport from 'passport';
import { router as aloRouter} from './routes/alo.routes'
import {router as authRouter} from './routes/auth.routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(json());
app.use(passport.initialize());
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
    app.use(errorhandler());
} else {
    app.use(morgan('tiny'));
}
app.use (`/api/v${process.env.API_VERSION}`, authRouter)
app.use(`/api/v${process.env.API_VERSION}`, aloRouter);

export default app;