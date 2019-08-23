import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/Model/Student';
import { Course } from 'src/Model/Course';
import { ROOT_URL } from 'src/Model/Config';
import { Observable, from } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class StudentDataService 
{
  students: Observable<Student[]>;
  newestudent: Student;

  newcourse: Observable<Course[]>;
  newCourse: Course;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  // Student Service--------------------
  getStudent() 
  {
    return this.http.get<Student[]>(ROOT_URL + 'Student');
  }

  AddStudent(std: Student) 
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = 
    {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone, 
      gender: std.gender, dob:std.dob
    }
    console.log(ROOT_URL);
    return this.http.post<Student>(ROOT_URL + 'Student', body, { headers });
  }

  ///
  EditStudent(std: Student) 
  {
    console.log(std);
    const params = new HttpParams().set('ID', std.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone, ID: std.id
      , gender: std.gender, dob:std.dob
    }
    return this.http.put<Student>(ROOT_URL + 'Student/' + std.id, body, { headers, params })
  }
  
  DeleteStudent(std: Student) 
  {
    const params = new HttpParams().set('ID', std.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: std.firstname, Lname: std.lastname, Email: std.email, phone:std.phone,
       ID: std.id, dob:std.dob
    }
    return this.http.delete<Student>(ROOT_URL + 'Student/' + std.id)
  }

  // Course Service--------------------------
  getCourse()
  {
    return this.http.get<Course[]>(ROOT_URL + 'Course');
  }

  AddCourse(crs: Course) 
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = 
    {
        CrseTitle: crs.courseTitle, 
        CrsCredits: crs.courseCredits, 
        CrsDescription:crs.coursedescription
    }
    console.log(ROOT_URL);
    return this.http.post<Course>(ROOT_URL + 'Course', body, { headers });
  }
  EditCourse(crs: Course) 
  {
    console.log(crs);
    const params = new HttpParams().set('ID', crs.crseCode);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
        CrseTitle: crs.courseTitle, CrsCredits: crs.courseCredits, 
        CrsDescription:crs.coursedescription, CrseCode:crs.crseCode
    }
    return this.http.put<Course>(ROOT_URL + 'Course/' + crs.crseCode, body, { headers, params })
  }
  DeleteCourse(crs: Course) 
  {
    const params = new HttpParams().set('ID', crs.crseCode);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
        CrseTitle: crs.courseTitle, CrsCredits: crs.courseCredits, 
        CrsDescription:crs.coursedescription, CrseCode:crs.crseCode
    }
    return this.http.delete<Course>(ROOT_URL + 'Course/' + crs.crseCode)
  }

  // user registration
}




