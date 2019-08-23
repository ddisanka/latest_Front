import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDataService } from '../DataService/StudentDataService';
import { Student } from 'src/Model/Student'
import { Router } from '@angular/router';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-angular-crud',
  templateUrl: './angular-crud.component.html',
  styleUrls: ['./angular-crud.component.css']
})
export class AngularCRUDComponent implements OnInit {


  stdlist: Student[];
  dataavailbale: Boolean = false;
  tempstd: Student

  constructor(private dataservce: StudentDataService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this.dataservce.getStudent().subscribe((tempdate) => {
      this.stdlist = tempdate;
      console.log(this.stdlist);
      if (this.stdlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }
    })
      , err => {
        console.log(err);
      }
  }

  deleteconfirmation(id: string) {

    this.tempstd = new Student();
    this.tempstd.id = id;
    this.dataservce.DeleteStudent(this.tempstd).subscribe(res => {
      this.toastr.success('Student Deleted', 'SUCCESSFULLY DELETED');
      this.LoadData();
    })
  }

  @ViewChild('stdadd', { static: true }) addcomponent: StudentAddComponent
  @ViewChild('regForm', { static: true }) editcomponent: StudentUpdateComponent

  loadAddnew() {
    this.addcomponent.objstd.email = ""
    this.addcomponent.objstd.firstname = ""
    this.addcomponent.objstd.lastname = ""
    this.addcomponent.objstd.id = ""
    this.addcomponent.objstd.gender = 0
    this.addcomponent.objstd.phone = null
    this.addcomponent.objstd.dob = new Date(Date.now())
  }

  loadnewForm(id: string, email: string, firstname: string, lastname: string, gender: number,
    phone: number, dob: Date) {
    console.log(gender);
    this.editcomponent.objstd.email = email
    this.editcomponent.objstd.firstname = firstname
    this.editcomponent.objstd.lastname = lastname
    this.editcomponent.objstd.id = id
    this.editcomponent.objstd.gender = gender
    this.editcomponent.objstd.phone = phone
    this.editcomponent.objstd.dob = dob
  }

  RefreshData() {
    this.LoadData();
  }
}
