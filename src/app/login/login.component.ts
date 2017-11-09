import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpModule, Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder,private router : Router, private user: UserService) { }

  ngOnInit() {
    this.loginForm  = this.fb.group({
      'name' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
    }
  
    get name() { return this.loginForm.get('name'); }
    get password() { return this.loginForm.get('password'); }

    private username;
    private pWord;

    loginUser(){
   
      var username= this.username;
      var pword= this.pWord; 
   
      if(username == "carrefour" && pword == "marhaba"){
        this.user.setUserLoggedIn();
        this.router.navigate(['/dashboard']);
      }
      else{
        alert('Entered details are wrong');
      }

    }

}
