import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-end-game',
  templateUrl: './hangman-end-game.component.html',
  styleUrls: [ './hangman-end-game.component.scss' ]
})
export class HangmanEndGame {
  @Input() 
  public successfullyFinished: Boolean;
  @Input() 
  public selectedLetters: Object;
  @Input()
  public selectedWord: String;
  @Input()
  public resetGame: Function;
}
