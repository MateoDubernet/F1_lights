import { Injectable } from "@angular/core";
import { Login } from "../model/login";
import { HttpClient } from "@angular/common/http";
import { Register } from "../model/register";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient){}

    login(login: Login) {
        return this.http.post('localhost:3000/login', login);
    }

    register(register: Login) {
        return this.http.post('localhost:3000/register', register);
    }
}