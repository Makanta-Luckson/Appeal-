const express = require('express');
const auth = require('../config/auth');
const router = express.Router();


router.get('/register', (req, res) => {
    res.render('registerStudent', {error : ''})
})


router.get('/student', auth, (req, res) => {
    const user = req.user;
    res.render('students', {user : user});
})



module.exports = router;