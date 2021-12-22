const express = require('express');
const auth = require('../config/auth');
const router = express.Router();
const Request = require('../schema/resquest');
const Response = require('../schema/response');

router.get('/register', (req, res) => {
    res.render('registerStudent', {error : ''})
})


router.get('/student', auth, (req, res) => {
    const user = req.user;
    res.render('students', {user : user});
})

router.get('/appeal', auth, (req, res) => {
    res.render('appeal');
});

router.post('/appeal', auth, (req, res) => {
    
    const userRequest = new Request(req.body);
    userRequest.save()
    .then( () => {
        res.redirect('/')
    })
    .catch(err => console.log(err))
  })

router.get('/response', auth, (req, res) => {
   const user = req.user;
   Response.find()
   .then(responses => {
    res.render('viewResponse', {user : user, responses : responses});
   })
   .catch(err => console.log(err))

    
})



module.exports = router;