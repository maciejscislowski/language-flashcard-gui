import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError} from "rxjs/operators";
import {Deck} from "@shared/models/deck";
import {Observable, of} from "rxjs";
import {DeckService} from "@core/http/deck/deck.service";
import {CoreModule} from "@core/core.module";
import {Paths} from "../../../configs/paths";

@Injectable({
  providedIn: CoreModule
})
export class DeckResolver implements Resolve<Deck> {

  constructor(private deckService: DeckService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Deck> {
    return this.deckService.get(route.params['id'])
      .pipe(catchError((err) => {
        this.router.navigate([Paths.DECKS]);
        return of(Deck.EMPTY_DECK);
      }));
  }

}
