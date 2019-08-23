import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/Model/Course';
import { Router } from '@angular/router';
import { StudentDataService } from '../DataService/StudentDataService';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempcrs: Course;
  @Input() objcrs: Course = new Course();;
  @ViewChild('closeBtn',{static:true}) cb: ElementRef;

  constructor(private dataservice: StudentDataService, private route: Router) {}

  ngOnInit() {
  }

  ResetValues() {}

  Register(regForm: NgForm)
  {
    this.objtempcrs = new Course();
    this.objtempcrs.coursedescription = regForm.value.coursedescription;
    this.objtempcrs.courseTitle = regForm.value.courseTitle;
    this.objtempcrs.courseCredits = regForm.value.courseCredits;
    this.objtempcrs.crseCode=regForm.value.crseCode;


    this.dataservice.AddCourse(this.objtempcrs).subscribe(res => 
    {
      alert("Course Added successfully");
      this.TakeHome();
    })
  }

  TakeHome() 
  {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
