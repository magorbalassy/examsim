import { Component, Input, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'answers',
  template: `
    <br>

  `,
  providers: [Answers,],
})
export class Answers implements OnInit {
  @Input() answers: Object;
  @Input() q_type: String;

  answer: any;
  questions: string[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let key in this.answers) {
      this.questions.push(this.answers[key]);
      console.log('key:', this.answers[key]);
    }
    console.log('Answer:', this.answers);
  }
}




