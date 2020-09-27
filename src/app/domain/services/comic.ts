import { ComicRepository } from '../../infra/repositories/comic';
import { BaseService } from './class/base-service';


class ComicService extends BaseService<any> {

}

export const comicService = new ComicService(ComicRepository);