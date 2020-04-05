import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Employee = [{Id : 1,Name : "Imran"},
  {Id : 2,Name : "Suhail"},
  {Id : 3,Name : "Muneeb"},
  {Id : 4,Name : "Mudasir"},
 ];
  constructor() { }
  GetMessage(): Promise<string>{
    return new Promise(resolve=>{
      setTimeout(()=>resolve('Hello World'),3000);
    });
  }
  GetAllEmployee():Promise<any>
  {
    return new Promise(resolve=>resolve(this.Employee));
  }
}
