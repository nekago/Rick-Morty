import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as characterListRouting from './modules/character-list/character-list-routing.module';
import { PageNotFoundComponent } from './global/modules/page-not-found/component/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    children: characterListRouting.routes,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
