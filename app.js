const express = require('express');
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');

const ejs = require('ejs')
const photoRoute = require('./routes/photoRoute')
const pageRoute = require('./routes/pageRoute')



const app = express();

mongoose.connect('mongodb://localhost/agency-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Db connected')
})
    .catch((error) => {
        console.error(error);
    });

app.set("view engine", "ejs");

//middle wares
app.use(express.static('public'))
app.use(express.json());
app.use(fileUpload())


//app.use('/photos', photoRoute)
app.use('/',pageRoute)

const port = 3000
app.listen(port, () => {
    console.log('3000 portunda başladı')
})