import { Model, Schema, model } from 'mongoose';
import { EventEntity } from '../../domain/entities/event-entity.interface';

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

export const eventSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  resourceURI: { type: String },
  urls: [{
    type: { type: String },
    url: { type: String }
  }],
  modified: { type: String },
  start: { type: String },
  end: { type: String },
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
  comics: seriesStoriesEventsSchema,
  series: seriesStoriesEventsSchema,
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
const EventModel: Model<EventEntity> = model<EventEntity>('Event', eventSchema, 'events');
export default EventModel;