import express from 'express';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user';

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
  res.status(200).json(req.body);
});

authRouter.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.statusMessage = 'must provide username and password';
    res.status(406).end();
    return;
  }

  try {
    new User({
      username,
      password
    }).save();

    res.status(200).end();
  } catch (err) {
    res.statusMessage = 'error saving new user';
    res.status(500).end();
  }
});

export default authRouter;
