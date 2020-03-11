import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

isLogged: boolean=true;

  constructor() { }
  login(){
    this.isLogged=true;
  }
  logout(){
    this.isLogged=false;
  }
}
