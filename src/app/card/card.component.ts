import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DataService],
})
export class CardComponent implements OnInit{

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.data.subscribe(e => console.log(e))
  }
}
