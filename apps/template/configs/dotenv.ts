import * as dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
    path: `.env.${NODE_ENV}`
});
