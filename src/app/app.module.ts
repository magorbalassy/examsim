import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatInputModule, MatProgressBarModule, MatRippleModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatMenuModule, MatSidenavModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerComponent } from './player.component'
import { ProgressBar } from './progressBar'
import { SelectDialog } from './selectDialog';
import { SelectDialogTable } from './selectDialogTable';
import { QuestionsService } from './questions.service';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule}  from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
