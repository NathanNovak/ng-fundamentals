import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, IEvent } from '../events/shared/index';
import { EventService } from '../events/shared/event-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];

  // tslint:disable-next-line:max-line-length
  constructor(
    public auth: AuthService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   this.eventService.getEvents()
   .subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
