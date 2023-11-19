const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: "main"}))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/consignment', (req, res) => {  
    res.render('show')
  })

  app.get('/force', (req, res) => {  
    res.render('nike')
  })

  app.get('/sample1', (req, res) => {  
    res.render('sample')
  })


  app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
  })
