import { EventRepository } from '../../infra/repositories/event';
import { BaseService } from './class/base-service';

class EventService extends BaseService<any> {

}

export const eventService = new EventService(EventRepository);