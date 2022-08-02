import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  depositForm = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });
  
  withdrawForm = this.fb.group({
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    acno1: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });
  user = ""
  acno: any;
  sDetails: Date;
  
  constructor(private router:Router,private ds:DataService, private fb: FormBuilder
    ) {
    this.user = this.ds.currentUser
    this.sDetails = new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      console.log("hello");
      
      alert('please login')
      this.router.navigateByUrl('')
    }
  }

  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount
 const result = this.ds.deposit(acno,pswd,amount)
if(result){
  alert(`${amount} is credited, new balance is ${result}`)
}

  }
  withdraw(){
    var acno = this.withdrawForm.value.acno1
    var pswd = this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1
 const result = this.ds.withdraw(acno,pswd,amount)
if(result){
  alert(`${amount} is debited, new balance is ${result}`)
}

  }
  logOut(){
    // remove login acno andusername
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')
//navigate bo login page
    this.router.navigateByUrl('')

  }

  deleteFunction(){
    this.acno = JSON.parse(localStorage.getItem('currentAcno')||"")
  }

  onCancel(){
    this.acno = ""
  }

}
