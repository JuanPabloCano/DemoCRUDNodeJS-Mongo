const User = require("../models/User");

const getUsers = (req, res) => {
  const users = User.find()
    .then((users) => {
      console.log({ users });
      res.status(200).json({ users });
      mongoose.connection.close();
    })
    .catch((err) => console.log(err.message));
};

const getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.status(200).json({ user });
      mongoose.connection.close();
    })
    .catch((err) => console.log(err.message));
};

const createUser = (req, res) => {
  const { name, lastName, phone, city } = req.body;
  const user = new User({ name, lastName, phone, city });
  user
    .save()
    .then((data) => {
      res.status(200).json(data);
      mongoose.connection.close();
    })
    .then(() => console.log("User Created"))
    .catch((err) => console.log(err.message));
};

const updateUserById = (req, res) => {
    const { name, lastName, phone, city } = req.body;
    const { id } = req.params;
    User.findByIdAndUpdate(id, {
        $set: {name, lastName, phone, city}
    }).then(() => {
      res.status(200).json({message: 'User Updated Successfully'});
      mongoose.connection.close()
    })
    .catch((err) => console.log(err.message));
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(() => {
      res.status(204).json({ message: 'User removed from DB' });
      mongoose.connection.close();
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  getUsers,
  createUser,
  updateUserById,
  deleteUser,
  getUserById,
};
