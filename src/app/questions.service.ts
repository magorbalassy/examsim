import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Question } from './models'

@Injectable()
export class QuestionsService {

  public response: Object;

  constructor(private http: Http) { }

  getQuestions(): Observable<Question> {
    var res: Response;
    var url = 'http://192.168.1.25:5000/analyzer/';
    var url = 'http://178.83.233.13:5000/analyzer/';    
    //var url = 'http://examsim-1.appspot.com/analyzer/';

    console.log("Getting questions - getQuestions().");
    return this.http.get(url)
      .map(res=>res.json());
  }

}
