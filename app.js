const express = require ('express')
const app = express()
const exhbs = require('express-handlebars') 
const port = process.env.PORT || 3000
const path = require('path')
const rIndex = require('./routes/index.js')



const exbs = exhbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
})

app.engine('hbs' , exbs.engine)
app.set('view engine' , 'hbs')
app.set('views' , path.join(__dirname , 'views'))

app.use(express.static(path.join(__dirname, "public")))

app.use(rIndex)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})