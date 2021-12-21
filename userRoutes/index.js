const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('All set');
})


router.get('/login', (req, res) => {
    res.send('Login')
})


module.exports = router;