import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class CourseService{
   url=environment.apiUrl;
   headers=new HttpHeaders();
   constructor(private http:HttpClient){}


   getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/courses/').pipe(
        map(courses => {
            return courses.map(course => {
                if (course.photo && !course.photo.startsWith('http')) {
                    course.photo = `${this.url}${course.photo}`;
                }
                return course;
            });
        })
    );
}


}