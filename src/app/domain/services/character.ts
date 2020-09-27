import { CharacterRepository } from '../../infra/repositories/character';
import { BaseService } from './class/base-service';

class CharacterService extends BaseService<any> {

}

export const characterService = new CharacterService(CharacterRepository);