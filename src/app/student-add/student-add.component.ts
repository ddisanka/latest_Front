import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/Model/Student';
import { Router } from '@angular/router';
import { StudentDataService } from '../DataService/StudentDataService';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit 
{


  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempstd: Student;
  @Input() objstd: Student = new Student();;
  @ViewChild('closeBtn',{static:true}) cb: ElementRef;

  constructor(private dataservice: StudentDataService, private route: Router, private toastr: ToastrService ) {}

  ngOnInit() 
  {

  }

  ResetValues() {}

  Register(regForm: NgForm)
  {

    this.objtempstd = new Student();
    this.objtempstd.email = regForm.value.email;
    this.objtempstd.firstname = regForm.value.firstname;
    this.objtempstd.lastname = regForm.value.lastname;
    this.objtempstd.gender = regForm.value.gender;
    this.objtempstd.phone = regForm.value.phone;
    this.objtempstd.dob = regForm.value.dob;

    if(this .objtempstd.email=="" || this .objtempstd.firstname=="" || this .objtempstd.lastname=="" 
    || this .objtempstd.gender !== 1 || 0 || this .objtempstd.phone == 0 || this .objtempstd.dob == null)
    {
      this.toastr.error('You have entered invalid or incomplete information. Please correct any errors and try again.', 'MISSING INFORMATION');
    }

    this.dataservice.AddStudent(this.objtempstd).subscribe(res => 
    {
      this.toastr.success('Student Registered', 'SUCCESSFULLY REGISTERED');
    })
  }

  TakeHome() 
  {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
