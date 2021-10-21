import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-exam',
  templateUrl: './ang-exam.component.html',
  styleUrls: ['./ang-exam.component.css']
})
export class AngExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("Hello World")
  }

}
