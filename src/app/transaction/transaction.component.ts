import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
// to hold acno for current user
acno:any
// to hold transaction arry of current user
transaction:any
balance:any
  constructor(private ds:DataService) { 
    ///get value from current acno
    this.acno = this.ds.currentAcno
    // to get transaction array from data service
    this.transaction = this.ds.getTransaction(this.acno);
    console.log(this.transaction);
    
  }

  ngOnInit(): void {
  }

}
