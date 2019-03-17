import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/Employee';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  {
    this.rs.getUser(this.auth.getId())
    .subscribe
    (
      (response : any) => 
      {
        this.account = response;
        console.log(response);
      },
      (error)=>
      {
        console.log("Error occured while fetching....");
      }
    )
  }

  account : Employee = new Employee("","","","","","","");

  form3 : FormGroup;
  
  ngOnInit() 
  {
    this.form3 = new FormGroup
    (
      {
        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14)
          ]
        )),

        lname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14)
          ]
        )),

        dob: new FormControl("", Validators.compose
        (
          [
            
            Validators.required
          ]
        )),

        number: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        email: new FormControl("", Validators.compose
        (
          [
            Validators.required
            //Validators.pattern("/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/")
          ]
        )),

        address : new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )),

        pwd: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )),

        Cpwd: new FormControl("",Validators.compose
        (
          [
              Validators.required,
              Validators.minLength(6),
              //PasswordValidation.MatchPassword
          ]
        ))
      });
    

  }
 

  //   clickUpdate(f)
  //   {
  //     console.log(f.number);
  //     let c1 = new Customers(f.number, f.fname,f.lname,f.dob,f.number,f.email,f.address,f.pwd);
  //     console.log(c1);
      
  //     this.rs.updateCustomer(c1,f.number)
  //     .subscribe
  //     (
  //       (response : any)=>
  //       {
  //         alert("Updated Successfully !!! Login Now Again....");
  //         this.lc.setLogin(false);
  //         //this.rs.setUID(userForm.uID);
  //         this.router.navigate(["./login"]);
  //       }
  //       ,
  //       (error) => 
  //         {
  //             console.log("Record with id "+f.number+" does not exists!!!" + error);
  //             alert("Record with id "+f.number+" does not exists!!!");
  //         }
  //   )
  // }
}