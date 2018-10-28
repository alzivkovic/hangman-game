import { Component, OnInit } from '@angular/core';

import words from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedLetters = {};
  selectedWord = '';
  wrongCount = 0;
  matchCount = 0;
  maximumWrong = 7;
  successfullyFinished = null;

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.selectedLetters = {};
    this.wrongCount = 0;
    this.matchCount = 0;
    this.maximumWrong = 7;
    this.selectRandomWord();
    this.setGameOverStatus(null);
  }

  selectRandomWord() {
    this.selectedWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
  }

  setGameOverStatus(status) {
    this.successfullyFinished = status;
  }

  selectLetter(letter) {
    if (this.selectedLetters[letter] === undefined) {
      const matchedLettersCount = (this.selectedWord.match(new RegExp(letter, "g")) || []).length;
      const containLetter = matchedLettersCount > 0;
      this.selectedLetters[letter] = containLetter;
      if (containLetter) {
        this.matchCount += matchedLettersCount;
        if (this.matchCount >= this.selectedWord.length) {
          this.setGameOverStatus(true);
        }
      } else {
        this.wrongCount++;
        if (this.wrongCount >= this.maximumWrong) {
          this.setGameOverStatus(false);
        }
      }
    }
  }
}
