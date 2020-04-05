import { Component } from '@angular/core';
import{Testing} from './Testing';
class abc
{
  constructor()
  {
    console.log('I M From abc class Constructor');
  }
  x = "Variable of abc class";
  show1(name:string)
  {
    console.log('I M From Show Function of abc class Hello '+name);
    console.log(this.x);
  }
}
class xyz
{
  constructor()
  {
    console.log('I M From xyz class Constructor');
  }
  x = "Variable of xyz class";
  show2(address:string)
  {
    console.log('I M From Show Function of xyz class, Hello '+address);
    console.log(this.x);
  }
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  viewProviders:[abc,xyz]
})
export class EmployeeComponent {

  constructor(public obj1:abc,public obj2:xyz,public obj3:Testing) 
  {
    console.log('I M From EmployeeComponet Constructor');
    obj1.show1('Imran Hassan');
    obj2.show2('Dubai');
    obj3.show3('Abu Dhabi');
  }
  
  Title = 'Employee Component';
}
