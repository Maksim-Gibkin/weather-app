import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Subject, takeUntil} from "rxjs";


interface ICityWeather {
  location: {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: Date,
  },
  current: {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: {
      text: string,
      icon: string
      code: number
    },
    wind_mph: number,
    wind_kph: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
    gust_mph: number,
    gust_kph: number,
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {
  notifier = new Subject();

  constructor(private dataService: DataService) {
  }

  public searchResult: any = null

  ngOnInit() {
    this.dataService.data.pipe(takeUntil(this.notifier)).subscribe((infoTown: any) => {
      this.searchResult = infoTown
    })
  }

  ngOnDestroy() {
    this.notifier.next('');
    this.notifier.complete()
  }
}
