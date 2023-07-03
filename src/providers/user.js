const { where, Op } = require("sequelize");
const { userModel } = require("../models");

const createUser= async (user) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    console.error("Error when creating user", error);
  }
};

const getAllUsers = async () => {
  try {
    const users = await userModel.findAll({
      where: {
        deleted: false,
      },
    });
    return users;
  } catch (error) {
    console.error("Error when fetching users", error);
  }
};

const getUser= async (userId) => {
  try {
    const user = await userModel.findOne({
      where: {
        [Op.and]: [
          { id: userId },
          { deleted: false }
        ]
      }
    });
    return user;
  } catch (error) {
    console.error("Error when fetching user", error);
  }
};

const updateUser = async (userId, updatedUser) => {
  try {
    const user = await userModel.update(
      { ...updatedUser},
      {
        where: {
          id: userId,
        },
      }
    );
    return user;
  } catch (error) {
    console.error("Error when updating user", error);
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await userModel.update(
      { deleted: true },
      {
        where: {
          id: userId,
        },
      }
    );
    return user;
  } catch (error) {
    console.error("Error when deleting user", error);
  }
};

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
