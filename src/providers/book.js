
const { bookModel } = require("../models");

const createBook = async (book) => {
  try {
    const newBook = await bookModel.create(book);
    return newBook;
  } catch (error) {
    console.error("Error when creating book", error);
  }
};

const getAllBooks = async () => {
  try {
    const books = await bookModel.findAll();
    return books;
  } catch (error) {
    console.error("Error when fetching books", error);
  }
};

const getBook = async (bookId) => {
  try {
    const book = await bookModel.findByPk(bookId);
    return book;
  } catch (error) {
    console.error("Error when fetching book", error);
  }
};


module.exports = { createBook, getAllBooks, getBook };
