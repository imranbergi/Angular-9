import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-ngfordirective',
  templateUrl: './ngfordirective.component.html',
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent  {
AllEmployee:Promise<any>;
  Employee = [{Id : 1,Name : "Imran"},
              {Id : 2,Name : "Suhail"},
              {Id : 3,Name : "Muneeb"},
              {Id : 4,Name : "Mudasir"},
             ];
  constructor(data:MessageService) 
  { 
    this.AllEmployee = data.GetAllEmployee();
  }
  functionClick()
  {
    // this.Employee.push({Id : 5,Name : "Basit"},
    // {Id : 6,Name : "Shoiab"},
    // {Id : 7,Name : "Shahid"},
    // {Id : 8,Name : "Javed"},
    // {Id : 9,Name : "Neelofer"});
    this.Employee = [{Id : 1,Name : "Imran"},
              {Id : 2,Name : "Suhail Javed"},
              {Id : 3,Name : "Muneeb"},
              {Id : 4,Name : "Mudasir"},
              {Id : 5,Name : "Basit"},
              {Id : 6,Name : "Shoiab"},
              {Id : 7,Name : "Shahid"},
              {Id : 8,Name : "Javed"},
              {Id : 9,Name : "Neelofer"}
             ];
  }
  trackByFunction(index:number,emp:any)
  {
    return(emp.Name);
  }
}
