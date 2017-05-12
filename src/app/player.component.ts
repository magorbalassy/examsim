import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { QuestionsService } from './questions.service';
import { MaterialModule } from '@angular/material';

import { Question } from './models';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  providers: [PlayerComponent, QuestionsService],
})
export class PlayerComponent implements OnInit {

  public exam_file_title : String;
  public exam_file_description : String;
  public questions_qty : number;
  public current_question : number = 0;
  public questions: Question[]=[];
  answers: string[]=[];
  files: Object[]=[
    {filename: 'test',
      description: 'LPIC-2 I Rama 2013'},
    {filename: 'test_files/CEH.txt',
      description: 'Certified Ethical Hacker'},
        {filename: 'test_files/SNIA_S10-110.txt',
      description: 'SNIA Certified Storage Professional'}
  ];
  given_answers: any[]=[];
  chkbox_result : string[]=[];

  constructor(private http: Http, questionsService: QuestionsService) {
    console.log('PlayerComponent Constructor started');
    questionsService.getQuestions()
      .subscribe(
      data => {
        console.log('data:', data);
        //this.parseObject(data);
      }
      );
    console.log('PlayerComponent Constructor executed.');
  }

  last() {this.current_question = this.questions_qty -1 ;this.getAnswers();}
  first() {this.current_question = 0;this.getAnswers();}

  checkbox(a){
    if (this.chkbox_result.includes(a)) {
      let index: number = this.chkbox_result.indexOf(a);
      if (index !== -1) { 
        this.chkbox_result.splice(index,1);
      }
    }
    else {
      this.chkbox_result.push(a);
    }
    console.log(this.chkbox_result);
    this.given_answers[this.current_question]=this.chkbox_result;
  }

  next() { 
    console.log('increasing index');
    console.log("answer given : ", this.given_answers, this.current_question);
    if (this.current_question == this.questions_qty-1 ) {
      this.current_question = 0 ;
    } 
    else {this.current_question++; }
    this.getAnswers();
  }

  previous() { 
    console.log('Decreasing index');
    if (this.current_question == 0) {
      this.current_question = this.questions_qty - 1;
    } 
    else { this.current_question--; }
    this.getAnswers();
  }

  parseObject(obj) {
    let index = 0;
    for (var key in obj) {
      //console.log("key: " + key + ", value: " + this.obj[key]);
      if (key == "exam_file_title") { 
        this.exam_file_title = 'Exam file title : ' + obj[key]; 
        console.log("Exam file title : ", this.exam_file_title);
      }
      if (key == "exam_file_descr") { 
        this.exam_file_description = obj[key]; }
      if (key == "questions") { this.questions_qty = obj[key]; }
      if (obj[key] instanceof Object) {
        this.questions[index] = obj[key];
        index++;
      }
    }
    console.log('question:', this.questions);
    this.getAnswers();
    this.given_answers[this.current_question]='';
  }

  getAnswers(){
    this.answers=[];
    for (let key in this.questions[this.current_question].answers) {
      this.answers.push(String(this.questions[this.current_question].answers[key]));
    console.log('Answers',this.answers)
    }
  }


  ngOnInit() {
    this.current_question=0;
    console.log('ngOnInit started.');
    console.log('ngOnInit ended.');
  }

}