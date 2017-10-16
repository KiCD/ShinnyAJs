import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styleUrls:['/login.component.css']
})

export class LoginComponent{
    email: string;
    password1: string;
    
    constructor(private router: Router){}
  
    login(){
      //this.userSVC.login(this.email, this.password1);
      //this.userSVC.verifyUser();
      alert('login not implemented');
    }
  
    signup(){
      //this.router.navigate(['/signup']);
      alert('sign up not implemented');
    }
  
    cancel(){
      alert('cancel not implemented');
    }
}