import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// uname = "" 
// acno = ""
// pswd = ""

//register model
registerForm = this.fb.group({
uname : [ "" ],
acno : [""],
pswd : [""]
})
  constructor(private ds:DataService, private router : Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

    const result = this.ds.register(acno,uname,pswd)
    if(result){
      alert('sucessfully regestered!!!')
this.router.navigateByUrl('')
    }
    else{
      alert('user already exist')
      this.router.navigateByUrl('')

    }
  }
}
