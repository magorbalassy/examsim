import {AfterViewInit, Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'progressbar',
  template: `
      <md-card>
        <md-card-content>
          <h2 class="example-h2">Result</h2>
          <md-progress-bar
            [color]="accent"
            [mode]="determinate"
            [value]="progress">
          </md-progress-bar>
          <h2 class="example-h2">{{ score }} (%{{ this.percentage }})</h2>
        </md-card-content>
      </md-card>
            `,
  providers: [],
})
export class ProgressBar implements AfterViewInit{
  @Input() score: number=0;
  public progress = 0;
  percentage = 0.0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const self = this;
    this.percentage = this.score*100/112;
    this.cdr.detectChanges();
    let handler = setInterval(function() {
      ++self.progress;
      if (self.progress >= self.score) {
        clearInterval(handler);
        return;
      }
    }, 8);
  }

}