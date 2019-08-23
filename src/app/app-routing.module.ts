import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { StudentAddComponent } from './student-add/student-add.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { UserComponent } from  './user/user.component';
import { RegistrationComponent } from  './user/registration/registration.component';

const routes: Routes = 
[
  {path:'student',component:AngularCRUDComponent},
  {path:'course',component:CourseCrudComponent},

  {path:'home',redirectTo:'user/registration',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
