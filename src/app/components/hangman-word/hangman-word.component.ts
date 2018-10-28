import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-word',
  templateUrl: './hangman-word.component.html',
  styleUrls: [ './hangman-word.component.scss' ]
})
export class HangmanWord {
  @Input() 
  public wordLetters: Array<String>;
  @Input() 
  public selectedLetters: Object;
}
