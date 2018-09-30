import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { QuestionsService } from './questions.service';
import { ExamFiles } from './models';

import 'rxjs/add/observable/of';

/**
 * @title SelectDialog table
 */
@Component({
  selector: 'select-dialog-table',
  //styleUrls: ['select-dialog-table.css'],
  templateUrl: 'selectDialogTable.html',
})
export class SelectDialogTable {
  @Output() selectedRow: EventEmitter<string> = new EventEmitter<string>();

  examFiles: ExamFiles[]=[];
  displayedColumns = ['examCode', 'Questions', 'File', 'Description'];
  dataSource : SelectDialogDataSource;
  selectedExamFile = '';

  constructor(questionsService: QuestionsService) {
    questionsService.getExamFiles()
      .subscribe(results => {
        results.forEach(function (r) {
          this.examFiles.push(<ExamFiles>JSON.parse(String(r)));
        }, this)
        this.dataSource= new SelectDialogDataSource(this.examFiles);
      });
  }

  highlight(row){
    this.selectedExamFile = row.examFile;
    this.selectedRow.emit(row.examFile);
  }

}



export class SelectDialogDataSource extends DataSource<ExamFiles> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  constructor(public eFiles:ExamFiles[]) {
    super();
  }

  connect(): Observable<ExamFiles[]> {
    console.log('bbbbbb',this.eFiles);
    console.log(this.eFiles[0].examCode);
    console.log(this.eFiles[0].constructor.name);

    return Observable.of(this.eFiles);
  }

  disconnect() { }
}
