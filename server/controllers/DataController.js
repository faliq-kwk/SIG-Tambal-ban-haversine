const User = require ("../models/DataModel.js")
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async (req, res) => {
     try {
          const users = await User.find();
          res.json(users);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
})
const getUserById = asyncHandler(async (req, res) => {
     try {
          const user = await User.findById(req.params.id);
          res.json(user);
     } catch (error) {
          res.status(404).json({ message: error.message });
     }
})
const saveUser = asyncHandler(async (req, res) => {
     const user = new User(req.body);
     try {
          const inserteduser = await user.save();
          res.status(201).json(inserteduser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
})
const updateUser = asyncHandler(async (req, res) => {
     const user = new User(req.body);
     try {
          const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
          res.status(200).json(updateduser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
})
const deleteUser = asyncHandler(async (req, res) => {
     const user = new User(req.body);
     try {
          const deleteduser = await User.deleteOne({ _id: req.params.id });
          res.status(200).json(deleteduser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
})

module.exports = {
     getUsers,
     getUserById,
     saveUser,
     updateUser,
     deleteUser,
}