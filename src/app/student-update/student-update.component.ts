import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { StudentDataService } from '../DataService/StudentDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Student } from 'src/Model/Student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})

export class StudentUpdateComponent implements OnInit 
{
  constructor(private dataservice: StudentDataService, private route: Router, private toastr:ToastrService ) { }

  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn',{static:true}) cb: ElementRef;

  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm',{static:true}) myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempstd: Student;
  @Input() objstd: Student = new Student();

  EditStudent(regForm: NgForm) {
    this.dataservice.EditStudent(this.objstd).subscribe(res => 
      {
      this.toastr.success('Student Updated', 'SUCCESSFULLY UPDATED');
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click()
    })
  }
}
