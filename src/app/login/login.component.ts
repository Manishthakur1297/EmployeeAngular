import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs : RestService, private router : Router, private auth : AuthService) { }

  form1;

  ngOnInit()
  {
    this.form1 = new FormGroup
    (
      {
        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        password: new FormControl("", Validators.compose
        (
          [
            Validators.required
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

      role: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        ))
      });

    }
      clickLogin(f)
      {

        //console.log("Role : "+f.role);
        //console.log("Id : "+f.uID);
        
        this.rs.getUser(f.uID)
        .subscribe
        (
          (response) => 
          {
            console.log(f);
            this.auth.login(f.role);
            this.auth.setId(f.uID);
            this.router.navigate([""]);

          },
          (error) =>
          {
            console.log("Error occured" + error);
          }

        )
        // this.lc.setLogin(true);
        // this.router.navigate(["./"]);
        console.log(f);
      }

      clickLogout()
      {
        this.auth.logout();
      }
  }
