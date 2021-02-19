const mongoose = require('mongoose')

const articleSchema = new mongooose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Article', articleSchema)