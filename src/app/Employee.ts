export class Employee
{
    id : string;
    firstName : string;
    lastName : string;
    email : string;
    mobile : string;
    password : string;
    role : string;

    constructor(i,f,l,m,e,r,p)
    {
        this.id = i;
        this.firstName =  f;
        this.lastName = l;
        this.email = e;
        this.mobile = m;
        this.password = p;
        this.role = r;
    }
}