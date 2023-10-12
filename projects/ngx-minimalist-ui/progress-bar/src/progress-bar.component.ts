import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBar {
  public steps: number[] = [];
  @Input()
  public set currentProgress(currentProgress: number) {
    this.progressChange.emit(currentProgress);
    this._currentProgress = currentProgress;
  }
  public get currentProgress(): number {
    return this._currentProgress;
  }

  @Input()
  public set numberSteps(numberSteps: number) {
    this._numberSteps = numberSteps;
    this.steps = this.getEnumeratedArray();
  }
  @Output() progressChange = new EventEmitter<number>();

  private _numberSteps!: number;
  private _currentProgress!: number;

  public isStepComplete(stepNumber: number): boolean {
    return stepNumber <= this.currentProgress;
  }

  public onIconClick(step: number) {
    this.currentProgress = step;
  }

  private getEnumeratedArray(): number[] {
    const array = [];
    for (let index = 1; index <= this._numberSteps; index++) {
      array.push(index);
    }

    return array;
  }
}
