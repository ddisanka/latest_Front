import { UserService } from '..//../DataService/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ElementSchemaRegistry } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {

    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'SUCCESSFULLY REGISTERED.');
        }

        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'REGISTRATION FAILED.');
                break;

              default:
                this.toastr.error('You have entered invalid or incomplete information. Please correct any errors and try again.', 'MISSING INFORMATION');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}