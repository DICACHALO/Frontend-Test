import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from './services/marvel-api.service';
import { CoreModule } from './core/core.module';
import { CharactersComponent } from './characters/characters.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatIconModule,
    MatButtonModule

  ],
  providers: [
    MarvelApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
