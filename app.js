const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');

const passport = require('passport');
require('./config/passport')(passport);

const session = require('express-session');

const app = express();


app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on 3000');
});  

mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => {
    console.log('Connected');
})
.catch(err => console.log(err))

//


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));


app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))

app.use(passport.session());


//Routes middleware
app.use('/', require('./userRoutes/index'));
app.use('/admin', require('./userRoutes/admin'));
app.use('/student', require('./userRoutes/student'))