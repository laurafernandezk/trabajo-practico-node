const {userService} = require("../services")

const createUser = (req, res) => {
  const user = userService.createUser(req.body)
  res.json(user);
};

const getUser= (req, res)=>
res.json({userId: req.params.userId, name: "Laura Fernandez"
})


module.exports = {createUser, getUser}