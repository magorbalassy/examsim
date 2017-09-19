import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { ExamFiles, Question } from './models'

@Injectable()
export class QuestionsService {

  public response: Object;

  constructor(private http: Http) { }

  getQuestions(): Observable<Question[]> {
    var res: Response;
    var url = 'http://192.168.1.25:5000/sendq/';
    var url = 'http://52.57.79.92:5000/sendq/';
    //var url = 'http://178.83.233.13:5000/sendq/';
    //var url = 'http://examsim-1.appspot.com/sendq/';

    console.log("Getting questions - getQuestions().");
    return this.http.get(url)
      .map(res=>res.json());
  }

  getExamFiles(): Observable<ExamFiles[]> {
    var res: Response;
    var url = 'http://192.168.1.25:5000/sendef/';
    var url = 'http://52.57.79.92:5000/sendef/';
    //var url = 'http://178.83.233.13:5000/sendq/';
    //var url = 'http://examsim-1.appspot.com/sendq/';

    console.log("Getting examfiles - getExamFiles().");
    return this.http.get(url)
      .map(res=><ExamFiles[]>res.json());
  }

}
