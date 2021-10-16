export class Model {
  user:string;
  items:TodoItem[];

  constructor() {
    this.user = 'HenimeX';
    this.items = [
      new TodoItem('Spor', false),
      new TodoItem('Kahvaltı', false),
      new TodoItem('Sinema', false),
      new TodoItem('Fatura', false),
      new TodoItem('Ders', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
