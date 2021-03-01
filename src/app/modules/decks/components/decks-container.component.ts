import {Component} from '@angular/core';

@Component({
  selector: 'app-decks-container',
  template: `
    <app-layout-header></app-layout-header>
    <router-outlet></router-outlet>
  `
})
export class DecksContainerComponent {

}
