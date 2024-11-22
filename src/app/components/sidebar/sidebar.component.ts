import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/ProfileService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  photoUrl: string = ''; // For displaying the image URL

  constructor(
    public router: Router,
    private profileService: ProfileService // Service to fetch user data
  ) {}

  ngOnInit(): void {
    this.GetUserInfo(); // Fetch user info on component load
  }

  // Method to fetch user info and set photo URL
  GetUserInfo(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No authentication token found');
      return;
    }
    this.profileService.GetUserInfo(token).subscribe(
      (response) => {
        this.photoUrl = `http://localhost:8000/media/${response.photo}`; // Construct full URL to the photo
      },
      (error) => {
        console.error('Failed to fetch user info:', error);
      }
    );
  }

  // Navigation Methods
  profile() {
    console.log('Profile clicked');
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  courses() {
    this.router.navigate(['/courses']);
  }

  acceuil() {
    this.router.navigate(['/acceuil']);
  }
}
