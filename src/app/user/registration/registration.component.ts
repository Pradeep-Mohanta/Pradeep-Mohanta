import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
onSubmit(){
    this.service.register().subscribe(
      (res:any) => {
        if(res.succeeded)
          {
            this.service.formModel.reset();
            this.toastr.success('New user created','Registration successfull')
          } 
        else {res.errors.forEach(element => 
              {
                switch(element.code)
                {
                  case 'DuplicateUserName':
                    this.toastr.error('User name already taken.','Registration failed.')
                    //usename already exist
                    break;
                  default:
                    this.toastr.error(element.description,'Registration failed.')
                    //Registration failed
                    break;
                }
              });
        }
      },
      err=>{
          console.log(err);
      }
    )
}
}
