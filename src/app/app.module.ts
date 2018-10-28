import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HangmanDraw } from './components/hangman-draw/hangman-draw.component';
import { HangmanLetters } from './components/hangman-letters/hangman-letters.component';
import { HangmanWord } from './components/hangman-word/hangman-word.component';
import { HangmanEndGame } from './components/hangman-end-game/hangman-end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanDraw,
    HangmanLetters,
    HangmanWord,
    HangmanEndGame
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
