import dotenv from 'dotenv';
import { dbConnection } from '../util/secrets';
import mongoose from 'mongoose';
import { characterService } from '../app/domain/services/character';
import { comicsData } from '../assets/database-initial-data/comics';
import { comicService } from '../app/domain/services/comic';
import { eventService } from '../app/domain/services/event';
import { seriesData } from '../assets/database-initial-data/series';
import { serieService } from '../app/domain/services/serie';
import { storiesData } from '../assets/database-initial-data/stories';
import { storyService } from '../app/domain/services/story';
import { charactersData } from '../assets/database-initial-data/characters';
import { eventsData } from '../assets/database-initial-data/events';

initDatabase();

/**
 * Init database
 */
async function initDatabase() {
  // Load environment variables from .env file, where API keys and passwords are configured
  dotenv.config({ path: '.env' });

  // Wait the connection with MongoDB
  try {
    (<any>mongoose).Promise = Promise;
    await mongoose.connect(dbConnection, { useMongoClient: true });
    console.log('MongoDB is Running.');
  } catch (err) {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit(1);
  }

  console.log('\nClearing database...');
  await characterService.clear();
  await comicService.clear();
  await eventService.clear();
  await serieService.clear();
  await storyService.clear();

  console.log('\nCreating characters...');
  for await (const elem of charactersData) {
    await characterService.create(elem);
  }

  console.log('\nCreating comics...');
  for await (const elem of comicsData) {
    await comicService.create(elem);
  }

  console.log('\nCreating events...');
  for await (const elem of eventsData) {
    await eventService.create(elem);
  }

  console.log('\nCreating series...');
  for await (const elem of seriesData) {
    await serieService.create(elem);
  }

  console.log('\nCreating stories...');
  for await (const elem of storiesData) {
    await storyService.create(elem);
  }

  console.log('\nDatabase initialized with success!');
  process.exit(0);
}