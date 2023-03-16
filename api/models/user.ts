import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: String,
    username: String,
    passwordHash: String
  })
);

export default User;
