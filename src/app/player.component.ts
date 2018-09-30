import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { QuestionsService } from './questions.service';
import { MatRippleModule } from '@angular/material';
import { ProgressBar } from './progressBar'


import { Question } from './models';
import { GivenAnswers } from './models';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  providers: [PlayerComponent, QuestionsService],
})
export class PlayerComponent implements OnInit {
  @ViewChild('endButton') endButton;

  public exam_file_title: String;
  public exam_file_description: String;
  public current_question: number = 0;
  public questions: Question[] = [];
  answers: string[] = [];
  files: Object[] = [
    {
      filename: 'progtec2.txt',
      description: 'ProgTec'
    },
    /*    {filename: 'test',
          description: 'LPIC-2 I Rama 2013'},
        {filename: 'test_files/CEH.txt',
          description: 'Certified Ethical Hacker'},
        {filename: 'test_files/SNIA_S10-110.txt',
          description: 'SNIA Certified Storage Professional'}*/
  ];
  public gAnswers: {}[] = [];
  score = 0;
  over = 0;
  progress = 0;
  switchvalue = false;
  label = '';

  constructor(private http: Http, questionsService: QuestionsService) {
    this.exam_file_description = 'Programozási technológia (JAVA II.) tesztfeladatok'
    this.current_question = 0;
    console.log('PlayerComponent Constructor started');
    questionsService.getQuestions()
      .subscribe(
      data => {
        this.questions = data;
        this.reset();
        //console.log('ganswers:', this.gAnswers);
        //console.log('data:', this.questions);
      }
      );
    console.log('PlayerComponent Constructor executed.');
  }

  reset() {
    this.current_question = 0;
    this.score = 0;
    this.over = 0;
    this.progress = 0;
    this.switchvalue = false;
    this.label = '';
    this.questions.forEach(function (item, index) {
      if (item.q_type === 'single-choice') {
        this.gAnswers[index] = {};
      }
      else if (item.q_type === 'fill-in-the-blank') {
        this.gAnswers[index] = {};
      }
      else {
        this.gAnswers[index] = {};
        item.answers.forEach(function (item) {
          this.gAnswers[index][item] = false;
        }, this);
      }
    }, this);
    if (this.endButton !==undefined) {this.endButton.disabled = false;}
  }

  last() {
    this.current_question = this.questions.length - 1;
    if (this.switchvalue) { this.showLabel(); }
  }

  first() {
    this.current_question = 0;
    if (this.switchvalue) { this.showLabel(); }
  }

  next() {
    //console.log(this.gAnswers);
    if (this.current_question == this.questions.length - 1) {
      this.current_question = 0;
    }
    else { this.current_question++; }
    if (this.switchvalue) { this.showLabel(); }
  }

  previous() {
    if (this.current_question == 0) {
      this.current_question = this.questions.length - 1;
    }
    else { this.current_question--; }
    if (this.switchvalue) { this.showLabel(); }
  }

  end() {
    let ans = [];
    this.endButton.disabled = true;
    this.questions.forEach(function (item, index) {
      ans[index] = '';
      if (item.q_type === 'multiple-choice') {
        for (let key in this.gAnswers[index]) {
          if (this.gAnswers[index][key] == true) ans[index] = ans[index] + key[0];
        }
      } else if (item.q_type === 'single-choice') {
        for (let key in this.gAnswers[index]) {
          ans[index] = this.gAnswers[index][key][0];
        }
      } else {
        for (let key in this.gAnswers[index]) {
          ans[index] = this.gAnswers[index][key];
        }
      }
      if (ans[index] == this.questions[index].correct_ans) {
        this.score += 1;
      }
    }, this);
    console.log('answers:', ans, 'score', this.score);
    this.over = 1;
  }

  showLabel() {
    console.log('switch:', this.switchvalue);
    if (this.switchvalue) {
      this.switchvalue = false;
      this.label = '';
    } else {
      this.switchvalue = true;
      this.label = String(this.questions[this.current_question].correct_ans);
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
    console.log('ngOnInit started.');
    console.log('ngOnInit ended.');
  }

}