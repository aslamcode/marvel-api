import * as path from 'path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import dotenv from 'dotenv';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import { port, dbConnection } from '../util/secrets';
import { superResponse } from '../middlewares/super-response/super-response';
import { controllers } from './api/controllers/controllers';
import mongoose from 'mongoose';
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const app = express();

// Configure the app
configureApp();

/**
 * Configure the app
 */
async function configureApp() {
  // Load environment variables from .env file, where API keys and passwords are configured
  dotenv.config({ path: '.env' });

  // Express configuration
  app.set('port', port || 3000);
  app.use(cors());
  app.use(compression());
  app.use(morgan('dev'));
  app.use(bodyParser.json({ limit: '25mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 });
  app.use(expressValidator());
  app.use(lusca.xframe('SAMEORIGIN'));
  app.use(lusca.xssProtection(true));
  app.use(superResponse);

  // Import the controllers
  app.use('/api/v1/public', controllers);

  // Configure swagger
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Marvel rest api',
        version: '1.0.0',
        description:
          'All routes of marvel rest api',
        license: {
          name: 'MIT'
        },
        contact: {
          name: 'Guilherme',
          url: '',
          email: 'guiri_@hotmail.com'
        }
      },
      servers: [
        {
          url: 'http://localhost:8080/api/v1/public'
        }
      ]
    },
    apis: ['src/app/controllers/*.ts']
  };

  const specs = swaggerJsdoc(swaggerOptions);
  app.use('/doc', swaggerUi.serve);
  app.get(
    '/doc',
    swaggerUi.setup(specs, {
      explorer: true
    })
  );

  // Wait the connection with MongoDB
  try {
    (<any>mongoose).Promise = Promise;
    await mongoose.connect(dbConnection, { useMongoClient: true });
    console.log('MongoDB is Running.');
  } catch (err) {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit(1);
  }
}

export default app;