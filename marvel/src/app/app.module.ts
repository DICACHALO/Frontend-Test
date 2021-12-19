import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from './services/marvel-api.service';
import { CoreModule } from './core/core.module';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,

  ],
  providers: [
    MarvelApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
