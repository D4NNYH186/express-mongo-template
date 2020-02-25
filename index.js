const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');

require('dotenv').config;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@clusterduck-cpzou.mongodb.net/userdb?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.get('/', (req, res)=>{
    res.render('index')
});

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})