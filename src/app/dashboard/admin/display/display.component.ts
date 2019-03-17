import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  { }

  columns = ["User Id","First Name","Last Name", "Email", "Mobile", "Role"];
  index = ["id", "firstName", "lastName", "email", "mobile", "role"];
  account : Employee = new Employee("","","","","","","");
  emp = [];

  ngOnInit() {

    this.rs.getAllUsers()
    .subscribe
    (
      (response)=>
      {
        console.log(response);
        this.emp = response;
        console.log(this.emp[1]);
      },

      (error)=>
      {
        console.log(error);
      }
    )

  }


}
