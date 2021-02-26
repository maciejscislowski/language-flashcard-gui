import {NgModule} from "@angular/core";
import {DecksPageComponent} from "./pages/decks-page/decks-page.component";
import {DecksRoutingModule} from "./decks-routing.module";
import {DeckDetailsPageComponent} from "./pages/deck-details-page/deck-details-page.component";
import {SharedModule} from "@shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    DecksRoutingModule
  ],
  declarations: [
    DecksPageComponent,
    DeckDetailsPageComponent
  ]
})
export class DecksModule {
}
