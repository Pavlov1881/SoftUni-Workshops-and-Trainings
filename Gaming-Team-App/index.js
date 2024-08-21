const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middlewares/authMiddleware');

//! change DB name
const databaseName = 'gaming-team';

const routes = require('./routes');

const app = express();
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(authMiddleware);
app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://Pavlov:1313@cluster0.r5ez2hh.mongodb.net/${databaseName}`);

app.listen(3000, () => console.log('The server is listening on port 3000...'));