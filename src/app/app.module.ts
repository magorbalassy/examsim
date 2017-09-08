import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerComponent } from './player.component'
import { ProgressBar } from './progressBar'

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, PlayerComponent, ProgressBar,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
