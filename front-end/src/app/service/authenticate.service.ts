import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  message: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  /** Inscription d'un nouvel utilisateur */
  register(data: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  /** Connexion utilisateur */
  login(data: { username: string, password: string }) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data)
      .pipe(
        tap(res => {
          localStorage.setItem('userId', res.userId.toString());
          localStorage.setItem('username', data.username); // stocker le nom d'utilisateur
        })
      );
  }


  /** Récupère l'ID de l'utilisateur connecté */
  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? Number(id) : null;
  }

  getUsername(): string | null {
    return localStorage.getItem('username'); // Stocker le username lors du login
  }

  /** Déconnexion */
  logout(): void {
    localStorage.removeItem('userId');
  }

  /** Vérifie si l'utilisateur est connecté */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }
}
