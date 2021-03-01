import {NgModule} from "@angular/core";
import {DecksPageComponent} from "./pages/decks-page/decks-page.component";
import {DecksRoutingModule} from "./decks-routing.module";
import {DeckDetailsPageComponent} from "./pages/deck-details-page/deck-details-page.component";
import {SharedModule} from "@shared/shared.module";
import {RunQuizPageComponent} from "./pages/run-quiz-page/run-quiz-page.component";
import {DecksContainerComponent} from "./components/decks-container.component";
import {DeckResolver} from "@core/http/deck/deck-resolver.service";
import {DeckService} from "@core/http/deck/deck.service";

@NgModule({
  imports: [
    SharedModule,
    DecksRoutingModule
  ],
  declarations: [
    DecksContainerComponent,
    DecksPageComponent,
    DeckDetailsPageComponent,
    RunQuizPageComponent
  ]
})
export class DecksModule {
}
