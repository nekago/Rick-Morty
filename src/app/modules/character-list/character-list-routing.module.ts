import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterDetailComponent} from "../character-detail/components/character-detail.component";

export const routes: Routes =[
    {
      path: '',
      component: CharacterListComponent
    },
    {
      path: ':id',
      component: CharacterDetailComponent,
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class CharacterListRoutingModule {}
