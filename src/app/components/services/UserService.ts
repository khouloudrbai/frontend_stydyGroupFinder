import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class UserService{
   url=environment.apiUrl;
   headers=new HttpHeaders();
   constructor(private http:HttpClient){}


   Login( username: any , password:any )
   {  
     return this.http.post<any>(this.url + '/login', {username,password}).pipe(map(res => {
      console.log(res);
       return res;
     }));
   }

  
   SignUp( username:any ,password:any,email:any, password2:any,studyinterest:any,photo:any,phonenumber:any )
   {  
     return this.http.post<any>(this.url + '/signup', {username,password,email,password2,studyinterest,photo,phonenumber,}).pipe(map(res => {
      console.log(res);
       return res;
     }));
   }
}