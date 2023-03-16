import dotenv from 'dotenv';

dotenv.config();

const { MONGO_CONNECTION_STRING, PORT, JWT_SIGNATURE } = process.env;

export { MONGO_CONNECTION_STRING, PORT, JWT_SIGNATURE };
