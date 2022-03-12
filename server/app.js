const cors = require('cors');
var express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const refresh = require('./controller');
const usersRoutes = require('./routes/people-routes.js')
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post-routes.js');
const isDevelopment = true;


var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// dotenv.config()
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected successfully to MongoDB!'))
//     .catch(err => console.error('Something went wrong', err));


if (isDevelopment) {

    app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }))
}

function nothing() {

}

//===============routes=====================//

app.use('/people', isDevelopment ? cors() : nothing, (usersRoutes));


//middleware//
app.use('/auth/login', function (req, res, next) {
    console.log('Time:', Date.now())
    console.log("inside middleware to call refresh");
    console.log(req.body);
    let x = refresh(req, res);
    console.log("refresh returned status = ", x);
    res.myStatusCode = x;
    next();
})



app.use('/auth', isDevelopment ? cors() : nothing, (authRoutes))
app.use('/post', isDevelopment ? cors() : nothing, (postRoutes))



//===================== server ========================================//
var server = app.listen(5789, '127.0.0.1', function () {
    var host = server.address().address
    var port = server.address().port
    console.log("My app is listening at http://%s:%s", host, port)
});