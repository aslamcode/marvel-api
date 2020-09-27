import { StoryRepository } from '../../infra/repositories/story';
import { BaseService } from './class/base-service';

class StoryService extends BaseService<any> {

}

export const storyService = new StoryService(StoryRepository);