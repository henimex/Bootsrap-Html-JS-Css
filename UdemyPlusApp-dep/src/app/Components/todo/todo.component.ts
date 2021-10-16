import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from 'src/app/model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title = 'UdemyPlusApp';
  model = new Model();
  displayAll = false;
  constructor() {}

  ngOnInit(): void {}

  getName(): string {
    return this.model.user;
  }

  get Items(): Model[] {
     // return this.model.items.sort((a,b)=>a.description.localeCompare(b.description)); //filter(item => !item.action);
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter((item) => !item.action);
    }
  }

  get allItems(): Model[] {
    return this.model.items;
  }

  addItem(value: string): void {
    if (value !== '') {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
