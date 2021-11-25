const User = require('../models/user.model');

const getAllUser = async (req, res, next) => {
  try {
    const [users] = await User.fetchAll();
    res.status(200).json(users)
  } catch(err) {
    res.status(500).send({msg: 'Server error!'});
  }
}

module.exports = {
  getAllUser
}