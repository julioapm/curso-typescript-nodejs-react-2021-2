import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  "login",
  new LocalStrategy((user, passwd, done) => {
    if (user !== "usuario") {
      return done(undefined, false, { message: "Usuário não encontrado" });
    }
    if (passwd !== "senha") {
      return done(undefined, false, { message: "Senha inválida" });
    }
    return done(undefined, { user: user, passwd: passwd });
  })
);

const JWTStrategy = passportJWT.Strategy;
passport.use(
  "jwt",
  new JWTStrategy(
    {
      secretOrKey: "minha-chave-secreta",
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (payload, done) => {
      try {
        return done(undefined, payload.user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
