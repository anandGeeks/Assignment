import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  previousUrl: string;
  durationInSeconds=5;
  loginform:FormGroup;
  constructor(private router: Router,private location: Location,private _snackBar: MatSnackBar,private fb:FormBuilder) { 
    this.loginform = this.fb.group({
      mobile:['',Validators.required],
      password:['',Validators.required],
      attach:['',Validators.required]
    })
  }
back(){
  this.location.back();
}
  ngOnInit(): void {
  }
  onFileInput(event){
    console.log(event);
    
  }
  message="login succes"
  login()
{
  
if(!this.loginform.value.mobile){
  this._snackBar.open("Mobile nuber is required", "",{
    duration: 2000,
  });
}else if(!this.loginform.value.password){
  this._snackBar.open("Password number is required", "",{
    duration: 2000,
  });
}else if(!this.loginform.value.attach){
  this._snackBar.open("attech number is required", "",{
    duration: 2000,
  });
}
}
}
