import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authenticate.service';
import { ScoreService } from '../service/score.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('light') light!: ElementRef;

  // Game state
  isGameStart = false;
  startGameTime!: Date;
  finishGameTime!: Date;

  score = 0;
  bestScore = 0;
  userId!: number;

  constructor(
    private renderer: Renderer2,
    private scoreService: ScoreService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.authService.getUserId();
    if (!id) {
      alert('Vous devez être connecté pour jouer.');
      this.router.navigate(['/login']);
    } else {
      this.userId = id;
    }
  }

  /** Lance le jeu */
  startGame(): void {
    this.setLightColor('red');

    setTimeout(() => {
      this.setLightColor('white');
      this.startGameTime = new Date();
      this.isGameStart = true;
    }, 2000);
  }

  /** Clic sur la fenêtre pour calculer le score */
  @HostListener('window:click')
  onWindowClick(): void {
    if (!this.isGameStart) return;

    this.finishGameTime = new Date();
    this.isGameStart = false;

    this.score = this.calculateReactionTime(this.startGameTime, this.finishGameTime);

    if (this.bestScore === 0 || this.score < this.bestScore) {
      this.bestScore = this.score;
      this.updateScoreOnServer();
    }
  }

  /** Change la couleur du carré */
  private setLightColor(color: string): void {
    this.renderer.setStyle(this.light.nativeElement, 'background', color);
  }

  /** Calcule la différence en millisecondes */
  private calculateReactionTime(start: Date, end: Date): number {
    return end.getTime() - start.getTime();
  }

  /** Envoie le meilleur score au serveur */
  private updateScoreOnServer(): void {
    if (!this.userId) return;

    this.scoreService.updateScore(this.userId, this.bestScore).subscribe({
      next: () => {
        console.log('Score mis à jour sur le serveur');
      },
      error: err => console.error('Erreur lors de la mise à jour du score', err)
    });
  }

  goToScores(): void {
    this.router.navigate(['/score']);
  }
}
