import { Component, Inject, ViewChild } from '@angular/core';
import { PlayerComponent } from './player.component';
import { SelectDialog } from './selectDialog';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav;
  title = 'SimX';
  selectedExamFile : string;

  constructor(public selectDialog: MdDialog) {}

  openDialog() {
    this.sidenav.toggle();
    let dialogRef = this.selectDialog.open(SelectDialog, {
      width: '800px',
      position: { top: '10%', left: '20%' },
      data: {selectedExamFile : this.selectedExamFile},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result, typeof(result));
      console.log('data :',this.selectedExamFile);
    });
    console.log('opendialog')
  }
}
