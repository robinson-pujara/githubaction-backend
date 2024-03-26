// src/db/knex.ts
import knex from 'knex';
import config from './knexfile'; // Adjust the path as necessary to where your knexfile.ts is located

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const connection = knex(environmentConfig);

export default connection;
