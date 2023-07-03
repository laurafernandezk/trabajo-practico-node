const {userProvider} = require("../providers")

const createUser= async (user)=>{
    const newUser = await userProvider.createUser(user);
    return newUser
}

const getAllUsers= async ()=>{
    const users = await userProvider.getAllUsers();
    if (users){
     console.log(users)
    }else{
     console.log("Can't access users")
    }
    return users
 }

const getUser= async (userId)=>{
   const user = await userProvider.getUser(userId);
   if (user){
    console.log(user)
   }else{
    console.log("There are no user for that request")
   }
   return user
}

const updateUser= async (userId, updatedUser)=>{
    const user = await userProvider.updateUser(userId, updatedUser);
    if (user){
     console.log(user)
    }else{
     console.log("Can't access user")
    }
    return user
 }

 const deleteUser= async (userId)=>{
    const user = await userProvider.deleteUser(userId);
    if (user){
     console.log(user)
    }else{
     console.log("Can't access user")
    }
    return user
 }




module.exports = {createUser, getAllUsers, getUser,updateUser, deleteUser}