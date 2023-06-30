const { libraryProvider } = require("../providers")

const createLibrary= async (library)=>{
    return await libraryProvider.createLibrary(library)
}

const getAllLibraries= async ()=>{
    const libraries = await libraryProvider.getAllLibraries();
    if (libraries){
     console.log(libraries)
    }else{
     console.log("Can't access libraries")
    }
    return libraries
 }

const getLibrary= async (libraryId)=>{
   const library = await libraryProvider.getLibrary(libraryId);
   if (library){
    console.log(library)
   }else{
    console.log("Can't access library")
   }
   return library
}




module.exports = {createLibrary, getAllLibraries, getLibrary}