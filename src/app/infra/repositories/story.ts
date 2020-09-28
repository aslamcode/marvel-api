import { StoryEntity } from '../../domain/entities/story-entity.interface';
import StoryModel from '../models/story';
import { BaseRepository } from './class/base-repository';

class StoryRepository extends BaseRepository<StoryEntity> {

}

export const storyRepository = new StoryRepository(StoryModel);

