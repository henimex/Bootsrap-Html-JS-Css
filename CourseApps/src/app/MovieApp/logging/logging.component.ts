import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {

  constructor(public logService: LoggingService) {}

  ngOnInit(): void {}
}
