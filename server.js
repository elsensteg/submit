require('./models/db');


const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


const userRoutes = require('./routes/user');
const displayRoutes = require('./routes/display');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(session({cookie: {maxAge: null}}));

//session middleware
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});




app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log('Express server started at port: 3000');
});



app.use('/user', userRoutes);
app.use('/display', displayRoutes);
