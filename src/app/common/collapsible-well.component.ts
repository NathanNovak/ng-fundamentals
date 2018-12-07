import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  visable = true;
  constructor() { }

  ngOnInit() {
    this.visable = true;
  }

  toggleContent() {
    this.visable = !this.visable;
  }
}
