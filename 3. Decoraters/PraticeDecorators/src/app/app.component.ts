import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log('I M From AppComponent Constructor');
  }
  title = 'Hello World Form AppComponent';
  @HostListener('click') newColor() {
    alert('I m from HostListener');
  }
 
}

