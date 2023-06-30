const {libraryService} = require("../services")

const createLibrary =  async (req, res) => {
  try{
  const newLibrary =  await libraryService.createLibrary(req.body)
  res.json(newLibrary);
  }catch(error){
    res.status(500).json({action: "createLibrary", error: error.message})
  }
};

const getAllLibraries =  async (req, res) => {
  try{
  const libraries =  await libraryService.getAllLibraries()
  res.json(libraries);
  }catch(error){
    res.status(500).json({action: "getAllLibraries", error: error.message})
  }
};

const getLibrary =  async (req, res) => {
  try{
  const library=  await libraryService.getLibrary(req.params.libraryId)
    if(!library){
      res.status(404).json({action: "getLibrary", error: error.message})
    }else{
      res.json(library);
    }
  }catch(error){
    res.status(500).json({action: "getLibrary", error: error.message})
  }
};

/*const updateBook =(req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({id:req.params.bookId, ...req.body})
    }

const deleteBook= (req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({})
    }*/


module.exports = {createLibrary, getAllLibraries, getLibrary}