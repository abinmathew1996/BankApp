import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // log in
  currentUser: any;

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

  constructor() {}

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
      };
      console.log(userDetails);

      return true;
    }
  }

  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username'];

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
        });
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
          });

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
