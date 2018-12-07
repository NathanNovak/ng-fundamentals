import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer') containerEl: ElementRef; // looks up ref from Html to hide modal.

  // tslint:disable-next-line:no-shadowed-variable
  constructor(@Inject(JQ_TOKEN) private $: any) {} // Injects JQuery

  closeModal() {
    if (this.closeOnBodyClick === 'true') {
  // takes the @ViewChild and gets the DOM element that points to to look up the 'modalcontainer'
  this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
