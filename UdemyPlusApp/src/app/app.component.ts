import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UdemyPlusApp';
  model = new Model();

  getName(){
    return this.model.user
  }

  get Items(){
    //return this.model.items.sort((a,b)=>a.description.localeCompare(b.description)); //filter(item => !item.action);
    return this.model.items.filter(item => !item.action);
  }

  addEvent(event:any){
    console.log(event);
    let obj = {description: "value",action:false}
    this.model.items.push(obj)
  }
}
