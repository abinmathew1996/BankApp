import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// proprerties / variables

aim ="your perfect banking partner"
account ="please input your acc no"
acno =""
pswd =""


// database
userDetails:any = {
  1000:{
    Uname:"max",
    acno:1000,
    password:1001,
    balance:15000
  },
  1001:{
    Uname:"maxwell",
    acno:1001,
    password:1002,
    balance:20000
  },
  1003:{
    Uname:"noir",
    acno:1003,
    password:1004,
    balance:25000
  }
}

// constructor -
  constructor() { }

  // ngoninint - life cycle hook of angular
  ngOnInit(): void {
  }
// userdefined functions

//acnoChange()
// acnoChange(event:any){
//   this.acno = event.target.value
//   console.log(this.acno);
  
// }
//acnoChange()
// pswdChange(event:any){
//   this.pswd = event.target.value
//   console.log(this.pswd);
  
// }
// //login()
login(){
  var acno = this.acno
  var pswd = this.pswd
  console.log(acno);
  console.log(pswd);
  
  
  let userDetails = this.userDetails
  if(acno in userDetails){
    if(pswd == userDetails[acno]["password"]){
      alert("login Succesful")
    }else
    {
      alert("incorrect password")
    }
}
else{
  alert("user doesnot exist")
}
}

//login()
// login(a:any,p:any){

//   var acno = a.value
//   var pswd = p.value
//   console.log(acno);
//   console.log(pswd);
  
  
//   let userDetails = this.userDetails
//   if(acno in userDetails){
//     if(pswd == userDetails[acno]["password"]){
//       alert("login Succesful")
//     }
//     {
//       alert("incorrect password")
//     }
// }
// else{
//   alert("user doesnot exist")
// }
// }


}
