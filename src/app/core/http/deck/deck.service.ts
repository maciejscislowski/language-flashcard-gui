import {Injectable} from "@angular/core";
import {ApiService} from "@core/http/api.service";
import {Observable, of} from "rxjs";
import {Deck} from "@shared/models/deck";
import {map, shareReplay} from "rxjs/operators";
import {CoreModule} from "@core/core.module";

@Injectable({
  providedIn: CoreModule
})
export class DeckService {

  constructor(private api: ApiService) {
  }

  get(id: string): Observable<Deck> {
    return this.api.get<Deck>(`/decks/${id}`)
      .pipe(shareReplay());
  }

}
