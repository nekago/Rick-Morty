import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as characterListRouting from './modules/character-list/character-list-routing.module';

const routes: Routes = [{
  path: '',
  redirectTo: 'characters',
  pathMatch: 'full',
},
  {
    path: 'characters',
    children: characterListRouting.routes,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
