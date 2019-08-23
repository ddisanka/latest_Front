import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StudentDataService} from '../app/DataService/StudentDataService';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './DataService/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    CourseCrudComponent,
    CourseAddComponent,
    CourseUpdateComponent,
    UserComponent,
    RegistrationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar:true
    })
  ],
  providers: [StudentDataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
