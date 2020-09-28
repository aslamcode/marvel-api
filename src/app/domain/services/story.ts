import { storyRepository } from '../../infra/repositories/story';
import { StoryEntity } from '../entities/story-entity.interface';
import { BaseService } from './class/base-service';

class StoryService extends BaseService<StoryEntity> {

  async getByCharacterId(id: string, skip: number, limit: number) {
    return await this.repository.listAll({ 'characters.items.resourceURI': new RegExp(id, 'gi') }, skip, limit);
  }

}

export const storyService = new StoryService(storyRepository);