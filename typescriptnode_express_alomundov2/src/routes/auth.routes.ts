import { Router } from "express";
import * as AuthController from "../controllers/authController"

export const router = Router();
export const path = "/auth";

router.post("/login", AuthController.login);
