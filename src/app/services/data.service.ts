import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // database
userDetails:any = {
  1000:{
    username:"max",
    acno:1000,
    password:1001,
    balance:15000
  },
  1001:{
    username:"maxwell",
    acno:1001,
    password:1002,
    balance:20000
  },
  1003:{
    username:"noir",
    acno:1003,
    password:1004,
    balance:25000
  }
}


  constructor() { }

  //register
  register(acno:any,username:any,password:any){
let userDetails = this.userDetails
if (acno in userDetails){
  return false
}else{
  userDetails[acno]={
    username,
    acno,
    password,
    balance:0
  }
  console.log(userDetails);
  
  return true
}
  }

  login(acno:any,pswd:any){
    
    
    let userDetails = this.userDetails
    
    if(acno in userDetails){
      if(pswd == userDetails[acno]["password"]){
        return true
      }else
      {
        alert("incorrect password")
        return false
      }
  }
  else{
    alert("user doesnot exist")
    return false
  }
  }



}
