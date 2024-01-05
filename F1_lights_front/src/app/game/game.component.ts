import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  @ViewChild('light') light: ElementRef
  startGameTime: Date;
  finishGameTime: Date;

  isGameStart = false;
  score = 0;
  bestScore = 0;

  @HostListener('window:click') 
  navireMoveDown(){
    
    if (this.isGameStart) {
      this.finishGameTime = new Date();

      let inputJSON = {
        "startGameTime": this.startGameTime,
        "finishGameTime": this.finishGameTime
      };
      this.isGameStart = false;

      var diff = this.getDataDiff(new Date(inputJSON.startGameTime), new Date(inputJSON.finishGameTime));
      
      this.score = diff.millisecond;
      if (this.score < this.bestScore || this.bestScore === 0) {
        this.bestScore = this.score;
      }
    }
  };
  
  constructor(private renderer: Renderer2) {}

  startGame() {

    this.renderer.setStyle(this.light.nativeElement, 'background', 'red');

    setTimeout(() => {
      this.renderer.setStyle(this.light.nativeElement, 'background', 'white');
      this.startGameTime = new Date();
      this.isGameStart = true;
    }, 2000)
  }

  getDataDiff(startDate: Date, endDate: Date) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return { day: days, hour: hours, minute: minutes, second: seconds, millisecond: diff };
  }
}
