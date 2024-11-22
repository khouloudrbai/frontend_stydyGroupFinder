import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
{path:'',redirectTo:'signup',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'acceuil',component:AcceuilComponent},
{path:'profile',component:ProfileComponent},
{path:'sidebar',component:SidebarComponent},
{path:'courses',component:CoursesComponent},
{path:'test',component:TestComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
