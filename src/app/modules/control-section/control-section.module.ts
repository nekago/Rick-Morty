import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './components/filter/filter.component';
import { ControlSectionComponent } from './components/control-section/control-section.component';
import { ControlSectionService } from './services/control-section.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationComponent, FilterComponent, ControlSectionComponent],
  exports: [ControlSectionComponent, PaginationComponent, FilterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [ControlSectionService],
})
export class ControlSectionModule {}
