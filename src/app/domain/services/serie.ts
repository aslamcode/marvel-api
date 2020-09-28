import { serieRepository } from '../../infra/repositories/serie';
import { SerieEntity } from '../entities/serie-entity.interface';
import { BaseService } from './class/base-service';


class SerieService extends BaseService<SerieEntity> {

}

export const serieService = new SerieService(serieRepository);