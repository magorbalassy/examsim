import {AfterViewInit, Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'progressbar',
  template: `
          <md-progress-bar
            [color]="accent"
            [mode]="determinate"
            [value]="progress">
          </md-progress-bar>
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
