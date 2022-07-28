import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private ds:DataService, private fb: FormBuilder
    ) {
    this.user = this.ds.currentUser
   }

  ngOnInit(): void {
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

}
