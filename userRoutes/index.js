const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const passport = require('passport');
const User = require('../schema/user');
const auth = require('../config/auth');



router.get('/', auth, (req, res) => {
   
    const user = req.user;

    if (user.role === 'Admin'){
        res.redirect('/admin/admin');
    }

    if (user.role === 'Student'){
        res.redirect('/student/student');
    }

})

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})


router.post('/login', (req, res, next) => {
   passport.authenticate('local', {
       successRedirect : '/',
       failureRedirect : '/login'
   })(req, res, next)
})

router.post('/register', (req, res) => {

    const {firstName, email, gender, role, lastName, computerNumber, school } = req.body;
    
      User.findOne({email : email})
      .then(user => {

          if (user){
              
            if (role === ' Admin'){
                res.render('registerAdmin', {error : 'The email you entered is already registered'})
            }

            if (role === 'Student'){
                res.render('registerStudent', {error : 'The email you enetered is already registered'})
            }
          }

          if (!user) {

            const password = computerNumber;

            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    const newUser = new User({firstName, email, gender, role, lastName, computerNumber, school});
                    newUser.password = hash;
                    newUser.save()
                    .then(() => {res.redirect('/login')})
                    .catch(err => console.log(err))
                });
            });

          }

      })



    

})


router.get('/login', (req, res) => {
    res.render('login')
})


module.exports = router;