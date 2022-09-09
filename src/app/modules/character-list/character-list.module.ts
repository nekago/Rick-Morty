import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})

export class CharacterListModule{}
