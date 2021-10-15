import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UdemyPlusApp';
  model = new Model();
  displayAll: boolean = false;

  getName() {
    return this.model.user;
  }

  get Items() {
    //return this.model.items.sort((a,b)=>a.description.localeCompare(b.description)); //filter(item => !item.action);
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter((item) => !item.action);
    }
  }

  get allItems() {
    return this.model.items;
  }

  addItem(value: string) {
    if (value != '') {
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
