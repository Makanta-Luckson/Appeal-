module.exports = function auth(req, res, next){
    if (req.user == null){
        res.redirect('/login')
    }else {
        next();
    }
}