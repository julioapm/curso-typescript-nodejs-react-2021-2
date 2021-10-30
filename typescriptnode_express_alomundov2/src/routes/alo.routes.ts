import { Router } from 'express';
import * as AloController from '../controllers/alo.controller';

export const router = Router();//Dentro do router estão os comandos get/post/put/delete e outros
export const path = '/alo';
router.get(path, AloController.getAlo);
router.get(`${path}/erro`, AloController.getAloErro);
router.get(`${path}/:nome`, AloController.getAloComParametro);
//As rotas vão informar o verbo de acesso(path) o caminho do URI(/:nome) e a função  a ser executada
router.post(path, AloController.postAlo);




























/*import { Router } from 'express';
import { body } from 'express-validator';
import * as AloController from '../controllers/alo.controller';
import passport from 'passport';

export const router = Router();
export const path = '/alo';
router.get(path, AloController.getAlo);
router.get(`${path}/erro`, AloController.getAloErro);
router.get(`${path}/:nome`, passport.authenticate('jwt', { session: false }), AloController.getAloComParametro);
router.post(path, AloController.postAlo);
router.post(`${path}/validado`,
            body('nome').notEmpty().trim().isLength({min:1, max:25}).withMessage('Nome deve ter entre 1 e 25 caracteres'),
            AloController.postAloValidado);
            */