import { Router } from "express";
import { body } from "express-validator";
import * as AloController from "../controllers/aloController";
import passport from "passport";

export const router = Router();
export const path = "/alo";
router.get(path, AloController.getAlo);
router.get(`${path}/erro`, AloController.getAloErro);
router.get(
  `${path}/:nome`,
  passport.authenticate("jwt", { session: false }),
  AloController.getAloComParametro
);
router.post(path, AloController.postAlo);
router.post(
  `${path}/validado`,
  body("nome")
    .notEmpty()
    .trim()
    .isLength({ min: 1, max: 25 })
    .withMessage("Nome deve ter entre 1 e 25 caracteres."),
  AloController.postAloValidado
);
