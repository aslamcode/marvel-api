import { SerieRepository } from '../../infra/repositories/serie';
import { BaseService } from './class/base-service';


class SerieService extends BaseService<any> {


}

export const serieService = new SerieService(SerieRepository);