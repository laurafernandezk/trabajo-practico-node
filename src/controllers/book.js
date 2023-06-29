const {bookService} = require("../services")

const createBook = (req, res) => {
  const book = bookService.createBook(req.body)
  res.json(book);
};

const getBook = (req, res)=>
res.json({bookId: req.params.bookId, name: "El principito"
})

const updateBook =(req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({id:req.params.bookId, ...req.body})
    }

const deleteBook= (req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({})
    }


module.exports = {createBook, getBook, updateBook, deleteBook}