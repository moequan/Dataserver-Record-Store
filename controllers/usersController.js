
const User = require("../models/User");
const createError = require("http-errors")

exports.getUsers = async (req, res, next) => {
  // const users = db.get('users').value();
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    next(error)
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

    const user = new User(req.body);
    await user.save();
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }

};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);

  } catch (error) {
    next(error)
  }

};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }



  res.status(200).send(user);
};

exports.updateUser = async (req, res, next) => {

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);

  } catch (error) {
    next(error)
  }

};
