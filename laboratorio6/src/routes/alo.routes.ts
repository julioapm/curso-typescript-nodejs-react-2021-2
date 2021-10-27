import { Router } from 'express';
import { body } from 'express-validator';
import * as AloController from '../controllers/alo.controller';

export const router = Router();
export const path = '/alo';
router.get(path, AloController.getAlo);
router.get(`${path}/error`, AloController.getAloErro);
router.get(`${path}/:nome`, AloController.getAloComParametro);
router.post(path, AloController.postAlo);
router.post(`${path}/validado`, 
body('nome').notEmpty().trim().isLength({min:1, max:25}).withMessage('Nome deve ter entre 1 a 25 caracteres'), 
AloController.postAloValidado);