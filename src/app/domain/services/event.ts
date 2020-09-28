import { eventRepository } from '../../infra/repositories/event';
import { EventEntity } from '../entities/event-entity.interface';
import { BaseService } from './class/base-service';

class EventService extends BaseService<EventEntity> {

}

export const eventService = new EventService(eventRepository);