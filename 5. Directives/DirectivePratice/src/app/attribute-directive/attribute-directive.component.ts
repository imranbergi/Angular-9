import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  myCountry: string = "Canada";
  Name: string = "Imran";
  Employee = [{ Id: 1, Name: "Imran", Country: "Canada" },
  { Id: 2, Name: "Suhail", Country: "UK" },
  { Id: 3, Name: "Muneeb", Country: "Australia" },
  { Id: 4, Name: "Mudasir", Country: "USA" },
  ];

  Green(): string {
    return ('green');
  }
  Pink(): string {
    return ('pink');
  }
  CountryColor(country: string): string {
    if (country == 'Canada')
      return 'red';
    else if (country == 'UK')
      return 'blue';
    else if (country == 'Australia')
      return 'purple';
    else
      return 'orange';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
