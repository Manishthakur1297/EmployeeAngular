import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  { }

  form3 : FormGroup;
  
  ngOnInit() 
  {
    this.form3 = new FormGroup
    (
      {
        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        lname: new FormControl("", Validators.compose
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
          ]
        )),

        role : new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        pwd: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        Cpwd: new FormControl("",Validators.compose
        (
          [
              Validators.required
              //PasswordValidation.MatchPassword
          ]
        ))
      });
    

  }
 

  createEmployee(f)
    {
      console.log(f.number);
      let c1 = new Employee(f.uID, f.fname, f.lname, f.number,f.email,f.role,f.pwd);
      console.log(c1);
      
      this.rs.postUser(c1)
      .subscribe
      (
        (response : any)=>
        {
          alert("Created Successfully !!! ");
          //this.rs.setUID(userForm.uID);
          this.form3.reset();
        }
        ,
        (error) => 
          {
              console.log("Record with id "+f.uID+" already exists!!!" + error);
              alert("Record with id "+f.uID+" already exists!!!");
          }
    )
  }
}