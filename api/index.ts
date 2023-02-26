import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/api', (req, res) => {
  res.status(200).json({ app: 'MERN' });
});

app.post('/api/login', (req, res) => {
  res.status(200).json(req.body);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on ${PORT}...`));
