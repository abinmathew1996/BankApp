import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  //item used to hold values from parent
  @Input() item:string|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
