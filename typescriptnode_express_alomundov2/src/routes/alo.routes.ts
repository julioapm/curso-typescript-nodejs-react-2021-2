import { Router } from "express";
import * as AloController from "../controllers/aloController";

export const router = Router();
export const path = "/alo";
router.get(path, AloController.getAlo);
router.get(`${path}/erro`, AloController.getAloErro);
router.get(`${path}/:nome`, AloController.getAloComParametro);
router.post(path, AloController.postAlo);
