import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { timer } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerform:FormGroup;
  buttonName:any = "OTP";
  constructor(private router:Router,private fb:FormBuilder,private _snackBar: MatSnackBar) {
    this.registerform = fb.group({
      recommendetionCode:['',Validators.required],
      mobile:['',Validators.required],
      varificationCode:['',Validators.required],
      loginPassword:['',Validators.required],
      securityPassword:['',Validators.required]
    })
  }
  ngOnInit(): void {
  
  }
  
  back(){
    this.router.navigate(['/home']);
  }
  otp(){
    this.buttonName = 60;
    var i=this.buttonName 
   setInterval(() => {
  if (i == 0) {
    return;
  }
  this.buttonName=i--
  console.log(i--);

  }, 1000);

  }
  register()
    {
      
    if(!this.registerform.value.recommendetionCode){
      this._snackBar.open("RecommendetionCode is required", "",{
        duration: 2000,
      });
    }else if(!this.registerform.value.mobile){
      this._snackBar.open("Mobile is required", "",{
        duration: 2000,
      });
    }else if(!this.registerform.value.loginPassword){
      this._snackBar.open("LoginPassword  is required", "",{
        duration: 2000,
      });
    }else if(!this.registerform.value.securityPassword){
      this._snackBar.open("SecurityPassword  is required", "",{
        duration: 2000,
      });
    }
  }
}
