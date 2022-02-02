const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: false}))
app.set('view engine', 'handlebars')
const port=8080

app.get('/', function (req, res) {
   res.render('home')
});

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})