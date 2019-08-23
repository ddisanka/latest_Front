import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { StudentDataService } from '../DataService/StudentDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Course } from 'src/Model/Course';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  constructor(private dataservice: StudentDataService, private route: Router) { }

  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn',{static:true}) cb: ElementRef;

  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm',{static:true}) myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempcrs: Course;
  @Input() objcrs: Course = new Course();

  EditCourse(regForm: NgForm) {
    this.dataservice.EditCourse(this.objcrs).subscribe(res => 
      {
      alert("Course updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click()
    })
  }

}
