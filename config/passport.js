const bcrypt = require('bcryptjs');
const User = require('../schema/user');
const LocalStrategy = require('passport-local').Strategy;

module.exports  = (passport) => {

    passport.use(
    new LocalStrategy({usernameField : 'email'}, (email, password, done) => {

        //Match user

            User.findOne({email : email})
                .then(user => {

                    if (!user) {
                        return done(null, false, {message : 'The email you entered is not registered'})
                    }

                        //password match
                        bcrypt.compare(password, user.password, (err, match) => {
                            if (err) throw err;

                            if (match) {
                                
                                return done(null, user)

                            } else {return done(null, false, {message : 'The password you enetered is incorrect'})}

                        })


                })
            .catch(err => console.log(err))

    })
    )


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
        done(err, user);
        });
    });



}