import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  userUrl = "http://localhost:8080/user"

  LoginUser(login: any): Observable<any>{
    return this.http.post(this.userUrl + "/login", login);
  }

  registerUser(user: any): Observable<any>{
    return this.http.post(this.userUrl + "/register", user);
  }

  getUser(): Observable<any>{
    return this.http.get(this.userUrl + "/get");
  }

}
