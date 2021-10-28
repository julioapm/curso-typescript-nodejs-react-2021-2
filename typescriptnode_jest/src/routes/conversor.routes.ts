import { Router } from 'express';
import * as ConversorController from '../controllers/conversor.controller';

export const router = Router();
export const path = '/conversor';

//GET /conversor?moeda=:moeda&quantidade=:quantidade
router.get(`${path}`, ConversorController.getConversao);