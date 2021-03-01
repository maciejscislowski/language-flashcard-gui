import {DecksPageComponent} from "./pages/decks-page/decks-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DecksContainerComponent} from "./components/decks-container.component";
import {components} from "@shared/components";
import {DeckDetailsPageComponent} from "./pages/deck-details-page/deck-details-page.component";
import {RunQuizPageComponent} from "./pages/run-quiz-page/run-quiz-page.component";
import {DeckResolver} from "@core/http/deck/deck-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: DecksContainerComponent,
    children: [
      {
       path: '',
       component: DecksPageComponent
      },
      {
        path: ':id',
        component: DeckDetailsPageComponent,
        resolve: {
          deck: DeckResolver
        },
      },
      {
        path: '/:id/quiz',
        component: RunQuizPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecksRoutingModule {
}
