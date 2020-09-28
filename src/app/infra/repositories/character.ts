import { CharacterEntity } from '../../domain/entities/character-entity.interface';
import CharacterModel from '../models/character';
import { BaseRepository } from './class/base-repository';

class CharacterRepository extends BaseRepository<CharacterEntity> {

}

export const characterRepository = new CharacterRepository(CharacterModel);
