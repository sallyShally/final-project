
const userModels = require('../models/userModels');
const { ObjectId } = require('mongodb');
const bcrypt = require("bcrypt");

const user = userModels.user;

const addUser = async (userinfo) => {
    const newUser = new user(userinfo.user);
    const x = await newUser.save();
    return (`added new User with id ${x._id}`);
}
exports.addUser = addUser;

//--------------------------------------
// Get all users
const getAllusersFromDB = async () => {
    const x = await user.find();
    return JSON.parse(JSON.stringify(x));
};
exports.getAllusersFromDB = getAllusersFromDB;

//=========================
// Delete user by id 
const deleteUserById = async (theID) => {
    const x = await user.deleteOne({ id: theID });
    return (`deleted ${x.n} documents`);
}
exports.deleteUserById = deleteUserById;


//=========================
// Delete user by id 
const getUserById = async (theID) => {

    const x = await user.findOne({ id: theID });
    return x;
}
exports.getUserById = getUserById;

// //--------------------------------------
const updateUser = async (theID, UserInfo) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(UserInfo.password, salt);
    UserInfo.password = hashedPassword;
    const x = await user.updateOne({ id: theID }, UserInfo);
    return JSON.stringify(x);
}
exports.updateUser = updateUser;