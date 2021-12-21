const express = require('express');



const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on 3000')
});


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));


//Routes middleware
app.use('/', require('./userRoutes/index'));
app.use('/admin', require('./userRoutes/admin'));
app.use('/student', require('./userRoutes/student'))