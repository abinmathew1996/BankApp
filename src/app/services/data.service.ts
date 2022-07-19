import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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


  constructor() { }
}
