import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdirective',
  templateUrl: './ngifdirective.component.html',
  styleUrls: ['./ngifdirective.component.css']
})
export class NGIFDIRECTIVEComponent 
{
  IsValid : boolean = true;
  constructor() { }
  onchange(val:boolean)
  {
    this.IsValid = val;
  }
  

}
