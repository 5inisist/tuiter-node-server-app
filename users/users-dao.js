import usersModel from "./users-model.js";
// let users = [];


export const findAllUsers = () => usersModel.find();


export const findUserById = (id) => usersModel.findById(id);
//  const index = users.findIndex((u) => u._id === uid);
//  if (index !== -1) return users[index];
//  return null;


export const findUserByUsername = (username) => usersModel.findOne({username});
// {
//  const index = users.findIndex((u) => u.username === username);
//  if (index !== -1) return users[index];
//  return null;
// };


export const findUserByCredentials = (username, password) => usersModel.findOne({username, password});
// {
//  const index = users.findIndex((u) => u.username === username && u.password === password);
//  if (index !== -1) return users[index];
//  return null;
// };


export const createUser = (user) => usersModel.create(user);
// users.push(user);


// export const updateUser = (uid, user) => {
//  const index = users.findIndex((u) => u._id === uid);
//  users[index] = { ...users[index], ...user };
//  return {status: 'ok'}
// };
export const updateUser = (id, user) => usersModel.updateOne({_id:id}, {$set: user});
// {
//     users = users.map((usr, index) =>
//       index === (uid - 1) ?
//         { ...usr, ...body } : usr
//     );
//     return uid
//   };
export const deleteUser = (id) => usersModel.deleteOne({_id: id});
// {
//  const index = users.findIndex((u) => u._id === uid);
//  users.splice(index, 1);
//  return {status: 'ok'}
// };
