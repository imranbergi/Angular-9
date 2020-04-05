import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class SERVICESComponent implements OnInit {

  msg:string;
  pro:Promise<string>;
  constructor(message:MessageService) 
  { 
    this.pro = message.GetMessage();
    console.log(this.pro);
  }


  ngOnInit(): void {
  }

}
