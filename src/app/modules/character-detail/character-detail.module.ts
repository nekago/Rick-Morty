import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoaderModule} from "../../global/modules/loader/loader.module";
import {CharacterDetailComponent} from "./components/character-detail.component";
import {HeaderModule} from "../header/header.module";
import {ControlSectionModule} from "../control-section/control-section.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    CommonModule,
    LoaderModule,
    HeaderModule,
    ControlSectionModule,
    FontAwesomeModule,
  ],
})
export class CharacterDetailModule {}
