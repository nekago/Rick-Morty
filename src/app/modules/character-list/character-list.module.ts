import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {HeaderModule} from "../header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {ControlSectionModule} from "../control-section/control-section.module";
import {LoaderModule} from "../../global/modules/loader/loader.module";


@NgModule({
  declarations: [CharacterListComponent, CharacterComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule,
    ControlSectionModule,
    LoaderModule,
  ],
})
export class CharacterListModule {}
