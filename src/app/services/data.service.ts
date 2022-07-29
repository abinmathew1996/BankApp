import { Injectable } from '@angular/core';

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

  constructor() {
    this.gatDetails()
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

  gatDetails(){
    //database
    if(localStorage.getItem('database')){
      
      this.userDetails =JSON.parse(localStorage.getItem('database')||"")
    }
    if(localStorage.getItem('currentUser')){
      
      this.currentUser =JSON.parse(localStorage.getItem('currentUser')||"")
    }
    if(localStorage.getItem('currentAcno')){
      
      this.currentAcno =JSON.parse(localStorage.getItem('currentAcno')||"")
    }
  }



  //register
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    } else {
      userDetails[acno] = {
        username,
        acno,
        password,
        balance: 0,
        transaction: [],
      }
      this.saveDetails()
      console.log(userDetails);

      return true;
    }
  }

  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username'];
        this.currentAcno = acno
        this.saveDetails()

        return true;
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert('user doesnot exist');
      return false;
    }
  }

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    let userDetails = this.userDetails;
    var amount = parseInt(amt);

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount;
        userDetails[acno]['transaction'].push({
          type: 'credit',
          amount,
          balance:userDetails[acno]['balance']
        })
        this.saveDetails()

        console.log(userDetails);

        return userDetails[acno]['balance'];
      } else {
        alert('In correct password');
        return false;
      }
    } else {
      alert('user does not exist');
      return false;
    }
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
