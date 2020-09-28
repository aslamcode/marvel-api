import { eventRepository } from '../../infra/repositories/event';
import { EventEntity } from '../entities/event-entity.interface';
import { BaseService } from './class/base-service';

class EventService extends BaseService<EventEntity> {

  async getByCharacterId(id: string, skip: number, limit: number) {
    return await this.repository.listAll({ 'characters.items.resourceURI': new RegExp(id, 'gi') }, skip, limit);
  }

}

export const eventService = new EventService(eventRepository);