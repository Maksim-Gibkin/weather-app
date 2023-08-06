import {Component, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataService: DataService) {
  }

  public searchValue: string = ''

  public onSubmit(form: NgForm) {
    this.dataService.getWeather(this.searchValue).pipe(tap(value => this.dataService.data.next(value))).subscribe()
  }

}
