import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = 'http://localhost:3000/users';
    
    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getAllUsernames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/usernames`);
    }
}