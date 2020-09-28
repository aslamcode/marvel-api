import logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';

// Check file .env exists
if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
    logger.error('File .env not found.');
    process.exit(1);
}

// Set vars using dev or prod values
export const environment = process.env.NODE_ENV;
const isProd = environment === 'prod';

export const port = isProd ? process.env.PORT : process.env.DEV_PORT;
export const dbConnection = isProd ? process.env.DB_CONNECTION : process.env.DEV_DB_CONNECTION;

// Check errors
if (!port) {
    logger.error('No PORT. Set PORT environment variable.');
    process.exit(1);
}

if (!dbConnection) {
    logger.error('No DB_CONNECTION. Set DB_CONNECTION environment variable.');
    process.exit(1);
}