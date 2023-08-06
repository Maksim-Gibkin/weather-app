import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AsyncSubject, BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    private apiKey: string = 'b8e51d2fbf914f3daa591329233007'
    public data = new BehaviorSubject({})

    getWeather(city: string) {
        const params = new HttpParams()
            .set('key', this.apiKey)
            .set('q', city || 'London');
        // this.data.next(this.http.get('http://api.weatherapi.com/v1/current.json', {params}))

        return this.http.get('http://api.weatherapi.com/v1/current.json', {params});
    }
}
