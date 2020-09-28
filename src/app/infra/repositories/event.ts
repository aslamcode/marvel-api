import { EventEntity } from '../../domain/entities/event-entity.interface';
import EventModel from '../models/event';
import { BaseRepository } from './class/base-repository';

class EventRepository extends BaseRepository<EventEntity> {

}

export const eventRepository = new EventRepository(EventModel);