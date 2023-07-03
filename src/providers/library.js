const { libraryModel } = require("../models");
const { Op } = require("sequelize");

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
    const libraries = await libraryModel.findAll(
      {
        where: {
          deleted: false,
        },
      },
      { include: { all: true } }
    );
    return libraries;
  } catch (error) {
    console.error("Error when fetching libraries", error);
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await libraryModel.findByPk(
      libraryId,
      { include: { all: true } },
      {
        where: {
          [Op.and]: [{ id: libraryId }, { deleted: false }],
        },
      }
    );
    return library;
  } catch (error) {
    console.error("Error when fetching library", error);
  }
};

const updateLibrary = async (libraryId, updatedLibrary) => {
  try {
    const library = await libraryModel.update(
      { ...updatedLibrary },
      {
        where: {
          id: libraryId,
        },
      }
    );
    return library;
  } catch (error) {
    console.error("Error when updating library", error);
  }
};

const deleteLibrary = async (libraryId) => {
  try {
    const library = await libraryModel.update(
      { deleted: true },
      {
        where: {
          id: libraryId,
        },
      }
    );
    return library;
  } catch (error) {
    console.error("Error when deleting library", error);
  }
};

module.exports = {
  createLibrary,
  getAllLibraries,
  getLibrary,
  updateLibrary,
  deleteLibrary,
};
