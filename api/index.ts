import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));

app.get('/api', (req, res) => {
  res.status(200).json({ app: 'MERN' }); // why am I getting a 304 in the browser?
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on ${PORT}...`));
