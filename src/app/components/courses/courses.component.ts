import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: any[] = []; // Array to hold course data

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {

    
    this.courseService.getCourses().subscribe(
      (respond:any) => {
        console.log("respon"+respond);

        this.courses = respond; 
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
}