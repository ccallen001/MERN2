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
    const msg = 'Username or password is incorrect.';
    res.statusMessage = msg;
    return res.status(401).json({ msg });
  }

  try {
    const token = jwt.sign(
      {
        username: user?.username,
        id: user?._id
      },
      JWT_SIGNATURE || ''
    );

    res.status(200).send({ username: user?.username, token });
  } catch (err) {
    res.statusMessage = 'Error logging in.';
    res.status(500);
  }
});

authRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const msg = 'Must provide username and password.'; // usually won't see due to front end validation
    res.statusMessage = msg;
    return res.status(400).json({ msg });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    const msg = 'Username is already in use.';
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
    res.statusMessage = 'Error saving new user.';
    res.status(500).end();
  }
});

authRouter.get('/test-auth', (req, res) => {
  const auth = req.headers?.authorization?.replace('bearer null', '');
  console.log(auth);

  if (!auth) {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  res.status(200).json({ msg: 'All good!' });
});

export default authRouter;
