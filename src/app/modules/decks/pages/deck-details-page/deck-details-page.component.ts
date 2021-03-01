import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Deck} from "@shared/models/deck";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-deck-details-page',
  templateUrl: './deck-details-page.component.html'
})
export class DeckDetailsPageComponent implements OnInit {

  deck$: Observable<Deck> = of();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.deck$ = this.route.data.pipe(map(data => data['deck']))
  }

}
