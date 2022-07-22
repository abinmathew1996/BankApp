import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { DataService } from '../services/data.service';


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

// constructor -
constructor(private ds:DataService, private router : Router) { }

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
  
  
  const result = this.ds.login(acno,pswd)
  if(result){
    
      alert("login Succesful")
      this.router.navigateByUrl('dashboard')
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
