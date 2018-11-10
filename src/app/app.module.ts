import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventResolveService
} from './events/index';
import { EventsAppComponent } from './events-app.component';
// import { EventsListComponent } from './events/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
// import { EventService } from './events/shared/event-service.service';
import { ToastrService } from './common/toastr.service';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
// import { CreateEventComponent } from './events/shared/create-event.component';
import { ErrorPageComponent } from './errors/error-page.component';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventResolveService } from './events/shared/event-resolve.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorPageComponent,
  ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    EventResolveService,
  {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
