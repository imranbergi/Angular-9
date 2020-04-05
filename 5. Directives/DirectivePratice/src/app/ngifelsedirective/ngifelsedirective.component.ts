import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelsedirective',
  templateUrl: './ngifelsedirective.component.html',
  styleUrls: ['./ngifelsedirective.component.css']
})
export class NGIFELSEDIRECTIVEComponent implements OnInit {

  IsValid : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onchange(val:boolean)
  {
    this.IsValid = val;
  }
}
