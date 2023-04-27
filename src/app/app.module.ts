import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';
import { HeaderComponent } from './header/header.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponenteComponent,
    HeaderComponent,
    SlideBarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
