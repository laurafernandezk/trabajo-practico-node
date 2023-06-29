const createLibrary = (library)=>{
    if(library) console.log(`la librería${library.libreria} ya existe` )
    console.log(library)
    return library
}


module.exports = {createLibrary}