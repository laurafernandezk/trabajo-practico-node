const {bookService} = require("../services")

const createBook =  async (req, res) => {
  try{
  const newBook =  await bookService.createBook(req.body)
  res.json(newBook);
  }catch(error){
    res.status(500).json({action: "createBook", error: error.message})
  }
};

const getAllBooks =  async (req, res) => {
  try{
  const books =  await bookService.getAllBooks()
  res.json(books);
  }catch(error){
    res.status(500).json({action: "getAllBooks", error: error.message})
  }
};

const getBook =  async (req, res) => {
  try{
  const book=  await bookService.getBook(req.params.bookId)
    if(!book){
      res.status(404).json({action: "getBook", error: error.message})
    }else{
      res.json(book);
    }
  }catch(error){
    res.status(500).json({action: "getBook", error: error.message})
  }
};

const updateBook = async (req, res) =>{ 
  try{
    const updatedBook=  await bookService.updateBook(req.params.bookId, req.body)

      if(!updatedBook){
        res.status(404).json({action: "updateBook", error: error.message})
      }else{
        res.json({id: req.params.bookId, ... req.body});
      }
    }catch(error){
      res.status(500).json({action: "updateBook", error: error.message})
    }
  };
    
const deleteBook= async (req, res)=>{
  try{
    const deletedBook=  await bookService.deleteBook(req.params.bookId)

      if(!deletedBook){
        res.status(404).json({action: "deletedBook", error: error.message})
      }else{
        res.json({id: req.params.bookId});
      }
    }catch(error){
      res.status(500).json({action: "deleteBook", error: error.message})
    }
    }


module.exports = {createBook, getAllBooks, getBook, updateBook, deleteBook}