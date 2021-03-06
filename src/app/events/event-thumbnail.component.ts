import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from './shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css' ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() {}

  ngOnInit() {}

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart};
  }
}
