import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './components/signup/signup.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AcceuilComponent,
    ProfileComponent,
    SidebarComponent,
    CoursesComponent,
    TestComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
