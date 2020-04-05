import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivePratice';
  Gender:string;
  constructor(){
    this.Gender = "Male";
  }
  onchange(value:string)
  {
    if(value == "Male")
      this.Gender = "Male";
    else if(value == "Female")
      this.Gender = "Female";
    else
      this.Gender = "Others";
  }
}
