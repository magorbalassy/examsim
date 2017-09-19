import { Component, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from './questions.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SelectDialogTable } from './selectDialogTable';

@Component({
  selector: 'select-dialog',
  templateUrl: 'selectDialog.html',
})
export class SelectDialog {

  constructor(
    public dialogRef: MdDialogRef<SelectDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedRow(row : string) {
    this.data.selectedExamFile = row;
  }
//  closeDialog() {
//    console.log('close button',this.data);
//    this.dialogRef.close(this.data);
//  }

}

