import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent  {

  Name:string = "Imran";
  Employee = [{Id : 1,Name : "Imran"},
  {Id : 2,Name : "Suhail"},
  {Id : 3,Name : "Muneeb"},
  {Id : 4,Name : "Mudasir"},
 ];
  constructor() { }


}
