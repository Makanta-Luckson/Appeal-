const express = require('express');
const auth = require('../config/auth');
const router = express.Router();
const Request = require('../schema/resquest');
const Response = require('../schema/response');
router.get('/register', auth, (req, res) => {
    res.render('registerAdmin', {error : ''})
})

router.get('/admin', auth, (req, res) => {
    const user = req.user;
    res.render('admin', {user : user});
})

router.get('/view-request', (req, res) => {
       Request.find()
       .then(requests => {
        res.render('viewAppeal', {requests : requests});
       })
       .catch(err => console.log(err))  
})

router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    Request.findById(id)
    .then(user => {
        res.render('appealDetails', {user : user})
    })
    .catch(err => console.log(err))
})

router.get('/add', (req, res) => {
    res.render('registerAdmin')
})

router.post('/appeal', (req, res) => {
    const appeal = Response(req.body);
    appeal.save()
    .then(() => {
        res.redirect('/')
    }).catch(err => console.log(err))
})



module.exports = router;