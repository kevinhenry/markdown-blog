const express = require('express')
const mongoos = require('mongoose')
// const Article = require('/models/article')
const articleRouter = require('./routes/articles')
// const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true
})

// useCreateIndex: true

app.set('view engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
// app.use(methodOverride('_method'))
app.use(express.urlencoded( extended: false}))
app.use('/articles', articleRouter)
app.get('/', (req, res) => {
  // res.send('Hello World')
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  },
  {
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
  }]
  // const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

// app.use('/articles', articlesRouter)

app.listen(5000)