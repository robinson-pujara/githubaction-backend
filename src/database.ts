import knex from 'knex';
import knexConfig from './db/knexfile';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const environment = process.env.NODE_ENV || 'development';
const configuration = knexConfig[environment];

export default knex(configuration);
    