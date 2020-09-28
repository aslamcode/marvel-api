import { Model, Schema, model } from 'mongoose';
import { StoryEntity } from '../../domain/entities/story-entity.interface';

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

export const storySchema = new Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  resourceURI: { type: String },
  type: { type: String },
  modified: { type: Date },
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
  series: seriesStoriesEventsSchema,
  comics: seriesStoriesEventsSchema,
  events: seriesStoriesEventsSchema,
  originalIssue: {
    resourceURI: { type: String },
    name: { type: String },
  }
}, { timestamps: false, versionKey: false });

/**
 * Export
 */
const StoryModel: Model<StoryEntity> = model<StoryEntity>('Story', storySchema, 'stories');
export default StoryModel;