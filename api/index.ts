import mongoose from 'mongoose';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import path from 'path';

import { MONGO_CONNECTION_STRING, PORT } from './config';

import authRouter from './routers/auth';

mongoose
  .connect(MONGO_CONNECTION_STRING as string)
  .then(() => console.log('Connected to mongoose...'))
  .catch((err) => console.log('Error connecting to mongoose', err));

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'));

app.use('/api', authRouter);

app.get('/api', (_, res) => {
  res.status(200).json({ app: 'MERN' });
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on ${PORT}...`));
