import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventResolveService,
} from './events/index';
// import { EventsListComponent } from './events/events-list.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/shared/create-event.component';
import { ErrorPageComponent } from './errors/error-page.component';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventResolveService } from './events/shared/event-resolve.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventResolveService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: ErrorPageComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
