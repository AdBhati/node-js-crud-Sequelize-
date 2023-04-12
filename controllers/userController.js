const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

// get all users
exports.getAll = async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ users: users });
};

// get user by id
exports.getById = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);

  res.status(200).json({ user });
};

// create new user
exports.create = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.create({ id: uuidv4(), email, password });

  res.status(201).json({ user });
};

// update a user

// delete a user
exports.deleteById = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  await User.destroy({ where: { id: req.params.id } });
  res.status(200).json({ message: "Deleted Successfully" });
};
