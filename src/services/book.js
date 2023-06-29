const createBook= (book)=>{
    if(book.name === "el principito") console.log(`el libro ${book.name} ya existe` )
    console.log(`${book.name} agregado` )
    return library
}


module.exports = {createBook}