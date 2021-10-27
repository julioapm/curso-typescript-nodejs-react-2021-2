import express from 'express';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import {json, urlencoded} from 'body-parser';
import passport from 'passport';
import { router as aloRouter} from './routes/alo.routes'
import {router as authRouter, path as authPath} from './routes/auth.routes';
import './util/auth'

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false}));
app.use(passport.initialize());
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
    app.use(errorhandler());
} else {
    app.use(morgan('tiny'));
}
app.use (`/api/v${process.env.API_VERSION}${authPath}`, authRouter)
app.use(`/api/v${process.env.API_VERSION}`, aloRouter);

export default app;