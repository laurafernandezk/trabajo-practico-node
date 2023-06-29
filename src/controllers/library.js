const {libraryService} = require("../services")

const createLibrary = (req, res) => {
  const library = libraryService.createLibrary(req.body)
  res.json(library);
};

const getAllLibraries =(req, res)=>{
  res.setHeader("Content-Type", "application/json")
  res.send({libreria: "el ateneo"})
}

const getLibrary = (req, res)=>
res.json({libreryId: req.params.libraryId, name: "El ateneo"
})
const updateLibrary =(req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({id:req.params.libraryId, ...req.body})
    }

const deleteLibrary = (req, res)=>{
    console.log(`metodo ${req.method} en la url ${req.url} con el siguiente contenido ${req.body}` )
    res.json({})
    }


module.exports = {createLibrary, getAllLibraries, getLibrary, updateLibrary, deleteLibrary}
