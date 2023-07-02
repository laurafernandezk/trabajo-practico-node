const { where, Op } = require("sequelize");
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
    const books = await bookModel.findAll({
      where: {
        deleted: false,
      },
    });
    return books;
  } catch (error) {
    console.error("Error when fetching books", error);
  }
};

const getBook = async (bookId) => {
  try {
    const book = await bookModel.findOne({
      where: {
        [Op.and]: [
          { id: bookId },
          { deleted: false }
        ]
      }
    });
    return book;
  } catch (error) {
    console.error("Error when fetching book", error);
  }
};

const updateBook = async (bookId, updatedBook) => {
  try {
    const book = await bookModel.update(
      { ...updatedBook },
      {
        where: {
          id: bookId,
        },
      }
    );
    return book;
  } catch (error) {
    console.error("Error when updating book", error);
  }
};

const deleteBook = async (bookId) => {
  try {
    const book = await bookModel.update(
      { deleted: true },
      {
        where: {
          id: bookId,
        },
      }
    );
    return book;
  } catch (error) {
    console.error("Error when deleting book", error);
  }
};

module.exports = { createBook, getAllBooks, getBook, updateBook, deleteBook };
