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

const updateBook =(req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({id:req.params.bookId, ...req.body})
    }

const deleteBook= (req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({})
    }


module.exports = {createBook, getAllBooks, getBook, updateBook, deleteBook}