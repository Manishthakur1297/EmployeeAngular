import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';
import { Response } from '@angular/http/src/static_response';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : Http) { }

  url : string = "http://localhost:3000/";

  employeeUrl : string = "http://localhost:3000/employee/";

  UID : any ;
  
  getUser(id)
  {
    console.log(this.employeeUrl+"/"+id);
    return this.http.get(this.employeeUrl+"/"+id)
    .map((response) => response.json()); 
  }

  updateUser(employee : Employee, id)
  {
    return this.http.put(this.employeeUrl+id,employee)
    .map((response : any ) => response);
  }

  postUser(employee : Employee)
  {
    return this.http.post(this.employeeUrl,employee)
    .map((response : any ) => response);
  }

  deleteUser(id)
  {
    return this.http.delete(this.employeeUrl+id)
    .map((response)=>response);
  }

  getAllUsers()
  {
    return this.http.get(this.employeeUrl)
    .map((response) => response.json());
  }


  // setter-------------

  setUID(i)
  {
      this.UID = i;
  }

  getUID(): any
  {
    return this.UID;
  }
}
