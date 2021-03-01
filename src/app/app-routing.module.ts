import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Paths} from "./configs/paths";

const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.DECKS,
    pathMatch: 'full'
  },
  {
    path: Paths.DECKS,
    loadChildren: () => import('./modules/decks/decks.module').then(m => m.DecksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
