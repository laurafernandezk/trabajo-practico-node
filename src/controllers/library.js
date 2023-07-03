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

const updateLibrary = async (req, res) =>{ 
  try{
    const updatedLibrary=  await libraryService.updateLibrary(req.params.libraryId, req.body)

      if(!updatedLibrary){
        res.status(404).json({action: "updateLibrary", error: error.message})
      }else{
        res.json({id: req.params.libraryId, ... req.body});
      }
    }catch(error){
      res.status(500).json({action: "updateLibrary", error: error.message})
    }
  };
    
const deleteLibrary= async (req, res)=>{
  try{
    const deletedLibrary=  await libraryService.deleteLibrary(req.params.libraryId)

      if(!deletedLibrary){
        res.status(404).json({action: "deleteLibrary", error: error.message})
      }else{
        res.json({id: req.params.libraryId});
      }
    }catch(error){
      res.status(500).json({action: "deleteLibrary", error: error.message})
    }
    }


module.exports = {createLibrary, getAllLibraries, getLibrary, updateLibrary, deleteLibrary}