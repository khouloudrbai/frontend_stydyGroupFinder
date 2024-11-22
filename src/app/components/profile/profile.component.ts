import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/ProfileService';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  form!: FormGroup; 
  photo: string = '';
  photoUrl: string = ''; 
  profileData: any;
  photoInput: any;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.form = this.fb.group({
      username: [''],
      email: [''],
      phonenumber: [''],
      github: [''],
      linkedin: [''],
      photo: [''],
    });

    // Fetch user info
    this.GetUserInfo();
  }

  GetUserInfo(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No authentication token found');
      return;
    }
    this.profileService.GetUserInfo(token).subscribe(
      (respond) => {
        this.profileData = respond;
        this.form.patchValue({
          username: respond.username,
          email: respond.email,
          phonenumber: respond.phonenumber,
          github: respond.github,
          linkedin: respond.linkedin,
          photo: respond.photo,
        });
        this.photoUrl = `http://localhost:8000/media/${respond.photo}`;
      },
      (error) => console.error('Failed to fetch user info:', error)
    );
  }

  triggerFileInput(): void {
    this.photoInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.form.patchValue({ photo: file }); // Update the form control
      this.photoUrl = URL.createObjectURL(file); // Optional: Preview the image
    }
  }
  
  update(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No authentication token found');
      return;
    }
  
    // Prepare FormData
    const formData = new FormData();
    formData.append('username', this.form.value.username);
    formData.append('email', this.form.value.email);
    formData.append('phonenumber', this.form.value.phonenumber);
    formData.append('github', this.form.value.github);
    formData.append('linkedin', this.form.value.linkedin);
  
    const photoFile = this.form.get('photo')?.value;
    if (photoFile instanceof File) {
      formData.append('photo', photoFile); // Append the file
    } else {
      console.warn('No valid photo file selected');
    }
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    this.profileService.updateProfile(formData, token).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Failed to update profile:', error);
      }
    );
  }
  
  
}
