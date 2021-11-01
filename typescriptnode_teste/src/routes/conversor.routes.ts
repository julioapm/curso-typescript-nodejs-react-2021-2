import {Router} from 'express';
import * as ConversorController from '../controllers/conversor.controller'

export const router = Router();
export const path = '/conversor'

//GET /conversor?moeda=:moefa&quantidade=:quantidade
router.get(`${path}`, ConversorController.getConversao);