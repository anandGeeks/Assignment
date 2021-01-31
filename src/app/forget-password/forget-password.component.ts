import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword:FormGroup;
  constructor(private location:Location,private fb:FormBuilder) {
    this.forgetPassword = this.fb.group({
      mobile:['',Validators.required],
      verification:['',Validators.required],
      newpassword:['',Validators.required],
   })
   }

  ngOnInit(): void {
  }
  back(){
    this.location.back();
  }
}
