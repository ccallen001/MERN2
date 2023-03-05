import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: String,
    username: String,
    password: String
  })
);

export default User;
