import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { MdMenuModule, MdSidenavModule, MdIconModule, MdCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerComponent } from './player.component'
import { ProgressBar } from './progressBar'
import { SelectDialog } from './selectDialog';
import { SelectDialogTable } from './selectDialogTable';
import { QuestionsService } from './questions.service';

//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//const appRoutes: Routes = [
  //{ path: 'select', component: SelectDialog},
  //{ path: 'selected',
  //  component: PlayerComponent,
  //  data: {examFile}
  //}
//];


@NgModule({
  declarations: [
    AppComponent, PlayerComponent, ProgressBar, SelectDialog,SelectDialogTable
  ],
  entryComponents: [SelectDialog],
  imports: [
//    RouterModule.forRoot(
//      appRoutes,
//      { enableTracing: true } // <-- debugging purposes only
//    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    MdMenuModule,
    MdButtonModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,
    MdToolbarModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
