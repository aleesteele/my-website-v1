/*/------------------MIDDLEWARE------------------/*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session');
const multer = require('multer');
const uidSafe = require('uid-safe');
const compression = require('compression');
const csurf = require('csurf');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(compression());
app.use(cookieSession({
    secret: 'a secret',
    maxAge: 1000 * 60 * 60 * 24 * 14
}))
app.use(csurf());
app.use(function(req, res, next) {
    res.cookie('cookie-thing', req.csrfToken())
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));
if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    }
});

server.listen(8080, function() { console.log("I'm listening.") });
