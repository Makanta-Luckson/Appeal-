const express = require('express');
const auth = require('../config/auth');
const router = express.Router();


router.get('/register', auth, (req, res) => {
    res.render('registerAdmin', {error : ''})
})

router.get('/admin', auth, (req, res) => {
    const user = req.user;
    res.render('admin', {user : user});
})


module.exports = router;