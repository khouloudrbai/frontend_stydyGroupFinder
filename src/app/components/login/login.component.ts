import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/UserService';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  obj:any;
  submitted=false;
  loginForm !:FormGroup;
  username:any;
  password:any;
  errorMessage: string = '';
  constructor(private httpClient:HttpClient,private userService:UserService,private fromBuilder:FormBuilder,public router:Router){
    this.loginForm=this.fromBuilder.group(
      {
        username:['',[Validators.required]],
        password:['',[Validators.required,/*Validators.maxLength(10),Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')*/]]

      }
    )
  }
  
  
  ngOnInit(): void {
  }

  onLoginSubmit(){
      this.userService.Login(this.loginForm.value.username,this.loginForm.value.password).subscribe(respond=>
      {
          console.log('Login response:', respond);
  
          // Store token in localStorage or sessionStorage
          localStorage.setItem('token', respond.token);
         console.log("login token"+respond.token)
          // Navigate to the "acceuil" route
          this.router.navigate(['/acceuil']);
        },
        (error) => {
          // Handle login error
          console.error('Login error:', error);
          this.errorMessage = 'Invalid username or password.';       
    
          
      });
    }
    }

