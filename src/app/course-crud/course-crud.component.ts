import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseAddComponent } from '../course-add/course-add.component';
import { StudentDataService } from '../DataService/StudentDataService';
import { Course } from 'src/Model/Course'
import { Router } from '@angular/router';
import { CourseUpdateComponent } from '../course-update/course-update.component';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css']
})
export class CourseCrudComponent implements OnInit {

  crslist: Course[];
  dataavailbale: Boolean = false;
  tempcrs: Course

  constructor(private dataservce: StudentDataService, private route: Router) {}

  ngOnInit() {
    this.LoadData();
  }

  LoadData() 
  {
    this.dataservce.getCourse().subscribe((tempdate) => 
    {
      this.crslist = tempdate;
      console.log(this.crslist);
      if (this.crslist.length > 0) 
      {
        this.dataavailbale = true;
      }
      else 
      {
        this.dataavailbale = false;
      }
    })
      , err => 
      {
        console.log(err);
      }
  }

  deleteconfirmation(id: string) 
  {
    if (confirm("Are you sure you want to delete this ?")) 
    {
      this.tempcrs = new Course();
      this.tempcrs.crseCode = id;
      this.dataservce.DeleteCourse(this.tempcrs).subscribe(res => 
        {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }

  @ViewChild('crsadd',{static:true}) addcomponent: CourseAddComponent
  @ViewChild('regForm',{static:true}) editcomponent: CourseUpdateComponent

  loadAddnew() 
  {
    this.addcomponent.objcrs.coursedescription = ""
    this.addcomponent.objcrs.courseTitle = ""
    this.addcomponent.objcrs.courseCredits = 0
    this.addcomponent.objcrs.crseCode = ""
  }

  loadnewForm(CrseCode: string, CrsCredits: number, CrseTitle: string, CrsDescription: string) 
  {
    console.log(CrsDescription);
    this.editcomponent.objcrs.crseCode = CrseCode
    this.editcomponent.objcrs.coursedescription = CrsDescription
    this.editcomponent.objcrs.courseTitle = CrseTitle
    this.editcomponent.objcrs.courseCredits = CrsCredits
  }

  RefreshData() 
  {
    this.LoadData();
  }

}
