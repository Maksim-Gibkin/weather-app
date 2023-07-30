import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'weather';

  constructor(private dataService: DataService) {
    dataService.getWeather().subscribe((el => console.log(el, '20202')))
  }
}
