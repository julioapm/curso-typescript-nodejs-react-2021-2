import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';

const LocalStrategy = passportLocal.Strategy;

//Estratégia de login
passport.use('login', new LocalStrategy((user, passwd, done)=> {
    //Implementar toda a lógica de autenticação
    if( user != 'usuario'){
        return done(undefined, false, {message: 'Usuário ou senha inválidos'});
    } if (passwd != 'senha'){
        return done(undefined, false, {message: 'Usuário ou senha inválidos'});
    }
    return done(undefined, {user: user, passwd: passwd});
}));
