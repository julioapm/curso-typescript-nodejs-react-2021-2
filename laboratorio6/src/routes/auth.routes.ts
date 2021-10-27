import {Router} from 'express';
import passport from 'passport';
import * as AuthController from '../controllers/auth.controller'

export const router = Router();
export const path = '/auth';

router.post(`${path}/login`, );
