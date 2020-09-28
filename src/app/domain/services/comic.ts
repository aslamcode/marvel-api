import { comicRepository } from '../../infra/repositories/comic';
import { ComicEntity } from '../entities/comic-entity.interface';
import { BaseService } from './class/base-service';


class ComicService extends BaseService<ComicEntity> {

}

export const comicService = new ComicService(comicRepository);