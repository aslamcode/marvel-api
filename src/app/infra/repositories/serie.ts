import { SerieEntity } from '../../domain/entities/serie-entity.interface';
import SerieModel from '../models/serie';
import { BaseRepository } from './class/base-repository';

class SerieRepository extends BaseRepository<SerieEntity> {

}

export const serieRepository = new SerieRepository(SerieModel);