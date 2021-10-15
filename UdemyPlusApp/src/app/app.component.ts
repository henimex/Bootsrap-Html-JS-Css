import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyPlusApp';
  user = 'HenimeX';
  user2 = 'HenimeX2';

  items = [
    {description: 'Kahvaltı', action: 'No'},
    {description: 'Sinema', action: 'No'},
    {description: 'Spor', action: 'No'},
    {description: 'Fatura', action: 'No'},
    {description: 'Ders', action: 'No'}
  ];

}
