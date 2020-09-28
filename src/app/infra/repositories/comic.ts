import { ComicEntity } from '../../domain/entities/comic-entity.interface';
import ComicModel from '../models/comic';
import { BaseRepository } from './class/base-repository';

class ComicRepository extends BaseRepository<ComicEntity> {

}

export const comicRepository = new ComicRepository(ComicModel);
