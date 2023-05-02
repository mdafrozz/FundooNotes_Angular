import { Component } from '@angular/core';
import { Login } from '../model/login.model';
import { User } from '../model/user.model';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  public login: Login = new Login();
  public user: User = new User();

  constructor(private route: ActivatedRoute,private router: Router, private httpService: HttpService, private _snackBar: MatSnackBar) { 
    
    }

  loginUser(){
    console.log(this.login)
    this.httpService.LoginUser(this.login)
      .subscribe(data => {
        console.log(data.data);
        localStorage.setItem('token', data.data)
        console.log(localStorage.getItem('token'))
        this.router.navigate(['home']);
      },
      error=>
      {console.log(error)
        this._snackBar.open("Invalid Email/Password", "close", {
          verticalPosition: 'top',
      horizontalPosition: 'center',
        });
      },
      )
  }

  register(){
    console.log(this.user)
    this.httpService.registerUser(this.user)
      .subscribe(data => {
        console.log(data);
      });
  }
}
