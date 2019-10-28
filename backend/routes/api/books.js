const { Router } = require('express');
const { unlink } = require('fs-extra'); //fs-extra permite codigo async-await
const path = require('path');
const router = Router();

const Book = require('../../models/Book');

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);

  } catch (error) {
  console.log(error);
  }
});

router.post('/', async(req, res, next) => {
  try {
    const {title, author, isbn} = req.body;
    const imagePath = './uploads/' + req.file.filename;

    const newBook = new Book({
      title,
      author,
      isbn,
      imagePath
    });
    await newBook.save();
    res.json({"message":"Book Saved"});
    
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async(req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public' + book.imagePath)); //funcion para eliminar la foto de la imagen
    res.json({"message":"Book Deleted"});

  } catch(error) {
    console.log(error);
  }
});

module.exports = router;