import {Component, OnDestroy} from '@angular/core';
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  constructor(private dataService: DataService) {
  }

  private notifier = new Subject();
  public searchValue: string = ''

  public onSubmit(form: NgForm) {
    this.dataService.getWeather(this.searchValue).pipe(takeUntil(this.notifier)).subscribe(value => this.dataService.data.next(value))
  }

  ngOnDestroy() {
    this.notifier.next('');
    this.notifier.complete()
  }
}
