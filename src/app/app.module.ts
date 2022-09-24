import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListModule } from './modules/character-list/character-list.module';
import { CharacterDetailModule } from './modules/character-detail/character-detail.module';
import { FormsModule } from '@angular/forms';
import { ControlSectionModule } from './modules/control-section/control-section.module';
import { PageNotFoundModule } from './global/modules/page-not-found/page-not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CharacterListModule,
    CharacterDetailModule,
    ControlSectionModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
