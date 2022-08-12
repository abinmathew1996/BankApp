import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

// global http header object
const options = {
  headers : new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // log in
  currentUser: any;
  // transaction acno

  currentAcno:any

  // database
  userDetails: any = {
    1000: {
      username: 'max',
      acno: 1000,
      password: 1001,
      balance: 15000,
      transaction: [],
    },
    1001: {
      username: 'maxwell',
      acno: 1001,
      password: 1002,
      balance: 20000,
      transaction: [],
    },
    1003: {
      username: 'noir',
      acno: 1003,
      password: 1004,
      balance: 25000,
      transaction: [],
    },
  };

  constructor(private http:HttpClient) {
    // this.gatDetails()
  }


  //save details() - to store data in local storage
  saveDetails(){
    //database
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
  }

  // gatDetails(){
  //   //database
  //   if(localStorage.getItem('database')){
      
  //     this.userDetails =JSON.parse(localStorage.getItem('database')||"")
  //   }
  //   if(localStorage.getItem('currentUser')){
      
  //     this.currentUser =JSON.parse(localStorage.getItem('currentUser')||"")
  //   }
  //   if(localStorage.getItem('currentAcno')){
      
  //     this.currentAcno =JSON.parse(localStorage.getItem('currentAcno')||"")
  //   }
  // }



  //register
  register(acno: any, username: any, password: any) {
const data = {
  acno,
  username,
  password
}
// reister api - asynchronos
return this.http.post('http://localhost:3000/register',data)
}
 //login
  login(acno: any, pswd: any) {
    const data = {
      acno,
      pswd
    }
    // login api - asynchronos
return this.http.post('http://localhost:3000/login',data)
  }

  // to get request headerwith tocken
  getToken(){
    // featch the tocken from local storage 
    const token = JSON.parse(localStorage.getItem('token') || '')
    // generate request header - httpHeader
    let headers= new HttpHeaders()
    // append tocken inside header
    if(token){
      headers = headers.append('x-access-token',token)
      //Implement overloading
      options.headers = headers
    }
    return options
  }

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
// req body
const data ={
  acno,
  pswd,
  amt
}
// deposit api asynchronous
return this.http.post(
  'http://localhost:3000/deposit',data,this.getToken())
  
  }

  //withdraw
  withdraw(acno1: any, pswd1: any, amt1: any) {
    let userDetails = this.userDetails;
    var amount = parseInt(amt1);

    if (acno1 in userDetails) {
      if (pswd1 == userDetails[acno1]['password']) {
        if (userDetails[acno1]['balance'] >= amount) {
          userDetails[acno1]['balance'] -= amount;

          userDetails[acno1]['transaction'].push({
            type: 'debit',
            amount,
            balance:userDetails[acno1]['balance']

          });
          this.saveDetails()

          console.log(userDetails);

          return userDetails[acno1]['balance'];
        } else {
          alert('Insufficient balance');
        }
      } else {
        alert('In correct password');
        return false;
      }
    } else {
      alert('user does not exist');
      return false;
    }
  }
// transaction

getTransaction(acno:any){
  
  return this.userDetails[acno]['transaction']
}

}
