import { comicRepository } from '../../infra/repositories/comic';
import { ComicEntity } from '../entities/comic-entity.interface';
import { BaseService } from './class/base-service';


class ComicService extends BaseService<ComicEntity> {

  async getByCharacterId(id: string, skip: number, limit: number) {
    return await this.repository.listAll({ 'characters.items.resourceURI': new RegExp(id, 'gi') }, skip, limit);
  }

}

export const comicService = new ComicService(comicRepository);