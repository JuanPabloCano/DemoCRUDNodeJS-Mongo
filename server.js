const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/user.routes');
const Config = require('./config');
const morgan = require('morgan');
const PageNotFound = require('./middleware/pageNotFound');
app.use(morgan('dev'));
app.use(express.json());

app.use('/', routes);
app.use(PageNotFound);

mongoose.connect(Config.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('DB connected');
});

app.listen(Config.PORT, () => {
    console.log(`Servidor corriendo en puerto ${Config.PORT}`);
});