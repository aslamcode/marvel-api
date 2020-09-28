import { Model, Schema, model, Types } from 'mongoose';
import { ComicEntity } from '../../domain/entities/comic-entity.interface';

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

export const comicSchema = new Schema({
  id: { type: Number },
  digitalId: { type: Number },
  title: { type: String },
  issueNumber: { type: Number },
  variantDescription: { type: String },
  description: { type: String },
  modified: { type: Date },
  isbn: { type: String },
  upc: { type: String },
  diamondCode: { type: String },
  ean: { type: String },
  issn: { type: String },
  format: { type: String },
  pageCount: { type: Number },
  textObjects: [{
    type: { type: String },
    language: { type: String },
    text: { type: String },
  }],
  resourceURI: { type: String },
  urls: [{
    type: { type: String },
    url: { type: String }
  }],
  thumbnail: {
    path: { type: String },
    extension: { type: String },
  },
  images: [{
    path: { type: String },
    extension: { type: String },
  }],
  variants: [{ type: Types.Subdocument }],
  collections: [{ type: Types.Subdocument }],
  collectedIssues: [{ type: Types.Subdocument }],

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
  characters: seriesStoriesEventsSchema,
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

  prices: [{
    type: { type: String },
    price: { type: Number },
  }],

  dates: [{
    type: { type: String },
    date: { type: Date },
  }]
}, { timestamps: false, versionKey: false });

/**
 * Export
 */
const ComicModel: Model<ComicEntity> = model<ComicEntity>('Comic', comicSchema, 'comics');
export default ComicModel;



{





}