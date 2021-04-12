import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP System';
  userDetails;
  tokenLength;
  fname: string;
  constructor(private router:Router,private service:UserService ) {
  }
  ngOnInit(): void {
    this.tokenLength=localStorage.length;
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
        this.fname=this.userDetails.fullName;
      },
      err=>{
        console.log(err);
      }
    );
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}

