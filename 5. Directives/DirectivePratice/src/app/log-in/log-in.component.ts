import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  IsValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  OnLoginChange(val:boolean)
  {
    this.IsValid = val;
  }
}
