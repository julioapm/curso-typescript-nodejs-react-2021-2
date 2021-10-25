import passport from "passport";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function login(req: Request, res: Response, next: NextFunction) {
  passport.authenticate("login", (err, user, info) => {
    try {
      if (err || !user) {
        return next(err);
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          return next(err);
        }
        const token = jwt.sign({ user: user.user }, "minha-chave-secreta");
        return res.json({ authtoken: token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
}
