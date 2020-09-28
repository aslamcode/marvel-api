import { storyRepository } from '../../infra/repositories/story';
import { StoryEntity } from '../entities/story-entity.interface';
import { BaseService } from './class/base-service';

class StoryService extends BaseService<StoryEntity> {

}

export const storyService = new StoryService(storyRepository);