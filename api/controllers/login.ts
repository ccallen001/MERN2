import express from 'express';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  res.status(200).json(req.body);
});

export default loginRouter;
