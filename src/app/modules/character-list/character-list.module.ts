import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {HeaderModule} from "../header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})

export class CharacterListModule{}
