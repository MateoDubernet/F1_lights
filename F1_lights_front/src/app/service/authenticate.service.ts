import { Injectable } from "@angular/core";
import { Login } from "../model/login";
import { HttpClient } from "@angular/common/http";
import { Register } from "../model/register";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(private http: HttpClient){}

    login(login: Login) {
        console.log(login);
    }

    register(register: Register) {
        console.log(register);
    }
}