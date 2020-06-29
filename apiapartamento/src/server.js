const express = require('express');
const bodyParser = require('body-parser');
// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
})

// Routes
const user_routes = require('./routes/users.routes');
const Apto_routes = require('./routes/Propiedad.routes');
app.use("/api", user_routes);
app.use("/api", Apto_routes);

module.exports = app;