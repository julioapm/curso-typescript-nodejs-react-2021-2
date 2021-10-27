import { Router } from 'express';
import * as AloController from '../controllers/alo.controller';

export const router = Router();
export const path = '/alo';
router.get(path, AloController.getAlo);
router.get(`${path}/error`, AloController.getAloErro);
router.get(`${path}/:nome`, AloController.getAloComParametro);
router.post(path, AloController.postAlo);