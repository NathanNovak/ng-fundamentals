import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventResolveService,
} from './events/index';

import { ErrorPageComponent } from './errors/error-page.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventResolveService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  {path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: ErrorPageComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
