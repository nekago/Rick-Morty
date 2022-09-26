import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './components/filter/filter.component';
import { ControlSectionComponent } from './components/control-section/control-section.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CharacterDetailsControlComponent } from './components/character-details-control/character-details-control.component';

@NgModule({
  declarations: [
    PaginationComponent,
    FilterComponent,
    ControlSectionComponent,
    CharacterDetailsControlComponent,
  ],
  exports: [
    ControlSectionComponent,
    PaginationComponent,
    FilterComponent,
    CharacterDetailsControlComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
  ],
})
export class ControlSectionModule {}
