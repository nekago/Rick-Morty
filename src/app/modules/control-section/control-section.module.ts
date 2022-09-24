import {NgModule} from "@angular/core";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FilterComponent} from "./components/filter/filter.component";
import {ControlSectionComponent} from "./components/control-section/control-section.component";
import {ControlSectionService} from "./services/control-section.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PaginationComponent, FilterComponent, ControlSectionComponent],
  exports: [ControlSectionComponent, PaginationComponent],
  imports: [CommonModule, FontAwesomeModule, HttpClientModule, RouterModule],
  providers: [ControlSectionService],
})
export class ControlSectionModule {}
