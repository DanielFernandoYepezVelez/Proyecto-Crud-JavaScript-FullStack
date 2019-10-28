const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  // No guardo las imagenes en la BD, solo la dirección de donde están.
  imagePath: {
    type: String
  },  
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('books', bookSchema);