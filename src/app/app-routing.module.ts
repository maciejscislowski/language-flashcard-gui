import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-decks',
    pathMatch: 'full'
  },
  {
    path: 'my-decks',
    loadChildren: () => import('./modules/decks/decks.module').then(m => m.DecksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
