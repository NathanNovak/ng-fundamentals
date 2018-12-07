import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from '../shared/index';
import { ISession } from '../shared/index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    // ** Had to convert to to an Observable to change event details info in modal **
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
   }
}
