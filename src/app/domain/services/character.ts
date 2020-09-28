import { characterRepository } from '../../infra/repositories/character';
import { CharacterEntity } from '../entities/character-entity.interface';
import { BaseService } from './class/base-service';

class CharacterService extends BaseService<CharacterEntity> {

}

export const characterService = new CharacterService(characterRepository);