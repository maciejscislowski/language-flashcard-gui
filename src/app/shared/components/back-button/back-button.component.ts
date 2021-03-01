import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  template: `
    <button (click)="back()" class="btn btn-primary">{{value}}</button>
  `
})
export class BackButtonComponent {

  @Input() value: string = 'Back';

  constructor(private location: Location)
  {}

  back() {
    this.location.back();
  }

}
