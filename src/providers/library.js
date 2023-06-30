const {libraryModel} = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await libraryModel.create(library);
    return newLibrary;
  } catch (error) {
    console.error("Error when creating library", error);
  }
};

const getAllLibraries = async () => {
  try {
    const libraries = await libraryModel.findAll(/*{include: {all:true}}*/);
    return libraries;
  } catch (error) {
    console.error("Error when fetching libraries", error);
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await libraryModel.findByPk(libraryId, /*{include: {all:true}}*/);
    return library;
  } catch (error) {
    console.error("Error when fetching library", error);
  }
};


module.exports = { createLibrary, getAllLibraries, getLibrary };
