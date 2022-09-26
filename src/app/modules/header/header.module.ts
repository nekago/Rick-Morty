import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';

@NgModule({
  declarations: [HeaderComponent, HeaderLogoComponent],
  exports: [HeaderComponent],
  imports: [CommonModule],
})
export class HeaderModule {}
