import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelsethendirective',
  templateUrl: './ngifelsethendirective.component.html',
  styleUrls: ['./ngifelsethendirective.component.css']
})
export class NGIFELSETHENDIRECTIVEComponent implements OnInit {
  IsValid:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  onchange(val:boolean)
  {
    this.IsValid = val;
  }
}
