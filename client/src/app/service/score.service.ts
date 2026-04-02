import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private apiUrl = 'http://localhost:3000/game';

  constructor(private http: HttpClient) { }

  updateScore(userId: number, bestScore: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/updateScore`, { userId, bestScore });
  }
}
