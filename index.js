let express = require('express')
let fs = require('fs')
let layouts = require('express-ejs-layouts')
let methodOverride = require('method-override')

let app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(layouts)
// Below is body-parser!
app.use(express.urlencoded({extended: false}))
// Method-Override will allow us to use PUT & DELETE routes!
app.use(methodOverride('_method'))

// Declare our controllers, how are we going to find data pertaining to my dinosaurs!
app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {console.log('🦊Singin and Dancin on Port 3000🦊')})