import { serieRepository } from '../../infra/repositories/serie';
import { SerieEntity } from '../entities/serie-entity.interface';
import { BaseService } from './class/base-service';

class SerieService extends BaseService<SerieEntity> {

  async getByCharacterId(id: string, skip: number, limit: number) {
    return await this.repository.listAll({ 'characters.items.resourceURI': new RegExp(id, 'gi') }, skip, limit);
  }

}

export const serieService = new SerieService(serieRepository);