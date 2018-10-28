import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-letters',
  templateUrl: './hangman-letters.component.html',
  styleUrls: [ './hangman-letters.component.scss' ]
})
export class HangmanLetters {
    @Input() 
    public letterClick: Function;
    @Input() 
    public selectedLetters: Object;

    lettersBlock=["ABCDEFGHIJK", "LMNOPQRS", "TUVWXYZ"].map(letters => letters.split(''));
}