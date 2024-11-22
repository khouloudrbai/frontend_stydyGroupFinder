import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class ProfileService{
   url=environment.apiUrl;
   constructor(private http:HttpClient){}


     // Method to upload the image
  uploadPhoto(formData: FormData): Observable<{ photoUrl: string }> {
    return this.http.post<{ photoUrl: string }>('http://localhost:8000/upload-photo/', formData);
  }

   GetUserInfo(token: string): Observable<any> {
    // Create headers including the Authorization token
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);

    return this.http.get<any>(this.url+'/getuserinfo', { headers });
  }


  updateProfile(profileData: FormData, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}` // Include the token
    });

    return this.http.patch(`${this.url}/profile/update/`, profileData, { headers });
  }


}