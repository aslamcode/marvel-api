import { Model, Schema, model } from 'mongoose';
import { CharacterEntity } from '../../domain/entities/character-entity.interface';
import { SerieEntity } from '../../domain/entities/serie-entity.interface';

/**
 * Schema
 */
const seriesStoriesEventsSchema = {
  available: { type: Number },
  collectionURI: { type: String },
  items: [{
    resourceURI: { type: String },
    name: { type: String }
  }],
  returned: { type: Number },
};

export const serieSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  resourceURI: { type: String },
  urls: [{
    type: { type: String },
    url: { type: String }
  }],
  startYear: { type: Number },
  endYear: { type: Number },
  rating: { type: String },
  type: { type: String },
  modified: { type: String },
  thumbnail: {
    path: { type: String },
    extension: { type: String },
  },
  creators: {
    available: { type: Number },
    collectionURI: { type: String },
    items: [{
      resourceURI: { type: String },
      name: { type: String },
      role: { type: String }
    }],
    returned: { type: Number },
  },
  characters: seriesStoriesEventsSchema,

  comics: seriesStoriesEventsSchema,
  series: seriesStoriesEventsSchema,
  stories: {
    available: { type: Number },
    collectionURI: { type: String },
    items: [{
      resourceURI: { type: String },
      name: { type: String },
      type: { type: String }
    }],
    returned: { type: Number },
  },
  events: seriesStoriesEventsSchema,
  next: {
    resourceURI: { type: String },
    name: { type: String }
  },
  previous: {
    resourceURI: { type: String },
    name: { type: String }
  }
}, { timestamps: false, versionKey: false });

/**
 * Export
 */
const SerieModel: Model<SerieEntity> = model<SerieEntity>('Serie', serieSchema, 'series');
export default SerieModel;