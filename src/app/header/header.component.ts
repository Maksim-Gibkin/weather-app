import {Component, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService],
})
export class HeaderComponent {
  constructor(private dataService: DataService) {
  }

  public searchValue: string = ''

  public onSubmit(form: NgForm) {
    this.dataService.getWeather(this.searchValue).subscribe()

  }

}
