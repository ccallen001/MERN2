import express from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SIGNATURE } from '../config';

import User from '../models/user';

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const passwordIsCorrect = user
    ? await bcrypt.compare(password, user.passwordHash || '')
    : false;

  if (!(user || passwordIsCorrect)) {
    const msg = 'username or password is incorrect';
    res.statusMessage = msg;
    return res.status(401).json({ msg });
  }

  try {
    const token = jwt.sign(
      {
        username: user?.username,
        id: user?._id
      },
      process.env.JWT_SIGNATURE || ''
    );

    res.status(200).send({ username: user?.username, token });
  } catch (err) {
    res.statusMessage = 'error logging inn';
    res.status(500);
  }
});

authRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const msg = 'must provide username and password';
    res.statusMessage = msg;
    return res.status(400).json({ msg });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    const msg = 'username already in use';
    res.statusMessage = msg;
    return res.status(400).json({ msg });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      passwordHash
    }).save();

    res.status(201).json(newUser);
  } catch (err) {
    res.statusMessage = 'error saving new user';
    res.status(500).end();
  }
});

export default authRouter;
