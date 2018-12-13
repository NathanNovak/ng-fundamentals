import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events',
  template: `
  <nav-bar></nav-bar>
<router-outlet></router-outlet> `,
})
export class EventsAppComponent {

  constructor (private auth: AuthService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.auth.checkAuthenicationStatus();
  }
}
