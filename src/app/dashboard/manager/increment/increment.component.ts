import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  constructor(private router : Router, private rs : RestService, private auth : AuthService) { }

  emp : Employee = new Employee("", "","","","","","","")


  ngOnInit() {
  }

  increment(id)
  {
    this.rs.incrementSalary(id)
    .subscribe
    (
      (response)=>
      {
        this.emp = response;
        let sal : number = parseInt(this.emp.salary);
        sal+=5000;
        this.emp.salary = sal.toString();
        this.rs.updateUser(this.emp,id,this.emp.role)
        .subscribe
        (
          (response)=>
          {
            console.log("Salary Incremented!!");
            alert("Salary Incremented !!");
          },
          (error)=>
          {
            console.log("Salary doesn't Incremented!!");
            alert("Error Occurred !!");
          }
        )
      }
    )
  }

}
