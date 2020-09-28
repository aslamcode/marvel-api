import { Model, Schema, model } from 'mongoose';
import { CharacterEntity } from '../../domain/entities/character-entity.interface';

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

export const characterSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  modified: { type: String },
  thumbnail: {
    path: { type: String },
    extension: { type: String },
  },
  resourceURI: { type: String },
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
  urls: [{
    type: { type: String },
    url: { type: String }
  }]
}, { timestamps: false, versionKey: false });

/**
 * Export
 */
const CharacterModel: Model<CharacterEntity> = model<CharacterEntity>('Character', characterSchema, 'characters');
export default CharacterModel;