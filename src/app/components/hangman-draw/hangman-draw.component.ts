import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-draw',
  templateUrl: './hangman-draw.component.html',
  styleUrls: [ './hangman-draw.component.scss' ]
})
export class HangmanDraw {
  @Input() 
  public wrongCount: Number;
}
