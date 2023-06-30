const { bookProvider } = require("../providers")

const createBook= async (book)=>{
    const newBook = await bookProvider.createBook(book);
    return newBook
}

const getAllBooks= async ()=>{
    const books = await bookProvider.getAllBooks();
    if (books){
     console.log(books)
    }else{
     console.log("Can't access books")
    }
    return books
 }

const getBook= async (bookId)=>{
   const book = await bookProvider.getBook(bookId);
   if (book){
    console.log(book)
   }else{
    console.log("Can't access book")
   }
   return book
}




module.exports = {createBook, getAllBooks, getBook}