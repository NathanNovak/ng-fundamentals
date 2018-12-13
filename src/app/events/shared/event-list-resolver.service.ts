import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event-service.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolveService implements Resolve<any> {

  constructor(private eventService: EventService) { }
  resolve() {
    return this.eventService.getEvents();
  }
}
