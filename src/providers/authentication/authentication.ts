import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import * as Config from '../../config';


/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {}


doLogin(username,password){

  let data = {
  username :username,
  password :password

              };

// let header = new Headers();
//  header.set('Content-Type', 'application/json');

let headers = new HttpHeaders();
headers.set ('Content-Type', 'application/json');
   
  return this.http.post(Config.jwt,data,{headers:headers});

}





}
