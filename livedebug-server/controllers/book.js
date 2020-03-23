const {
  Book
} = require('../models');

class BookController {
  static create(req, res, next) {
    console.log(req.body, 'ini dari ctl book')
    const {
      isbn,
      title,
      author,
      category,
      stock
    } = req.body;
    Book.create({
        isbn,
        title,
        author,
        category,
        stock
      })
      .then(function (newBook) {
        console.log(newBook)
        res.status(201).json(newBook);
      })
      .catch(next);
  }
}

module.exports = BookController;