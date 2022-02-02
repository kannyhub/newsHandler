const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()
const newsdata=require('./data/newsdata.js')

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
const port=8080
console.log(newsdata)
app.get('/', function (req, res) {
   res.render('home',{
       newsdata:newsdata
   })
});

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})