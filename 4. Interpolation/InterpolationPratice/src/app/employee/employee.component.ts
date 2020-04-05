import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  inputs:['pData']
})
export class EmployeeComponent 
{
  constructor(){}
  title = "This Is Child Component";
  pData: any;
}
