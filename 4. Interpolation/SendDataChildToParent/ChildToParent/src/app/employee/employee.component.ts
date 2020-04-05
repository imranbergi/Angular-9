import { Component, OnInit,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  outputs:['ChildCustomEvent']
})
export class EmployeeComponent 
{
  constructor() { }
  ChildCustomEvent = new EventEmitter
  OnChange(value:any)
  {
    this.ChildCustomEvent.emit(value);
  }

}
