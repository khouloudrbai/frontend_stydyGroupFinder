import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../services/UserService';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit{
  

  signupFrom!:FormGroup;
  username:any;
  firstname:any;
  lastname:any;
  phonenumber:any;
  studyinterest:any;
photo:any;
  passwordMatching=false;
  confirmPasswordClass='form-control';
  password=new FormControl(null,[
    Validators.required,
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )
  ]);
  verifypassword=new FormControl(null,[
    Validators.required,
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )
  ]);

  ngOnInit(): void {
  }

  constructor(public router:Router,private formBuilder:FormBuilder, private userService:UserService){
    this.signupFrom=this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email:['',[Validators.email,Validators.required]],
      phonenumber: new FormControl('', Validators.required),
      studyinterest: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),

      password:this.password,
      verifypassword:this.verifypassword},
      { validators: this.ConfirmedValidator('password', 'verifypassword') }  
     );
  }


 

  gologin(){
    this.router.navigate(['/', 'login']);
  }

  submitSignup(){
    console.log(this.signupFrom.value)
    this.userService.SignUp(
      this.signupFrom.value.firstname + this.signupFrom.value.lastname,
      this.signupFrom.value.password,
      this.signupFrom.value.email,
      this.signupFrom.value.verifypassword,
      this.signupFrom.value.studyinterest,
      this.signupFrom.value.photo,
      this.signupFrom.value.phonenumber,
    ).subscribe(respond=>
        {console.log(this.signupFrom.value) ;
            this.router.navigate(['/login'])
         }
     )
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {  
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
          // Ensure both controls are defined
      if (!control || !matchingControl) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  
}
