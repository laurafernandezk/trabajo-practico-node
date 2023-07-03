const {userService} = require("../services")

const createUser =  async (req, res) => {
  try{
  const newUser =  await userService.createUser(req.body)
  res.json(newUser);
  }catch(error){
    res.status(500).json({action: "createUser", error: error.message})
  }
};

const getAllUsers =  async (req, res) => {
  try{
  const users =  await userService.getAllUsers()
  res.json(users);
  }catch(error){
    res.status(500).json({action: "getAllUsers", error: error.message})
  }
};

const getUser =  async (req, res) => {
  try{
  const user=  await userService.getUser(req.params.userId)
    if(!user){
      res.status(404).json({action: "getUser", error: error.message})
    }else{
      res.json(user);
    }
  }catch(error){
    res.status(500).json({action: "getUser", error: error.message})
  }
};

const updateUser = async (req, res) =>{ 
  try{
    const updatedUser=  await userService.updateUser(req.params.userId, req.body)

      if(!updatedUser){
        res.status(404).json({action: "updateUser", error: error.message})
      }else{
        res.json({id: req.params.userId, ... req.body});
      }
    }catch(error){
      res.status(500).json({action: "updateUser", error: error.message})
    }
  };
    
const deleteUser= async (req, res)=>{
  try{
    const deletedUser=  await userService.deleteUser(req.params.userId)

      if(!deletedUser){
        res.status(404).json({action: "deletedUser", error: error.message})
      }else{
        res.json({id: req.params.userId});
      }
    }catch(error){
      res.status(500).json({action: "deleteUser", error: error.message})
    }
    }


module.exports = {createUser, getAllUsers, getUser, updateUser, deleteUser}