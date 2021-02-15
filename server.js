const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res)) => {
  const articles = [{
    
  }]

  res.render('index', { articles 'Hello' })
})

app.listen(5000)