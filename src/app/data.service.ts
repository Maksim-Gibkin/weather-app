import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  private apiKey: string = 'b8e51d2fbf914f3daa591329233007'
  private query: string = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=London`

  getWeather() {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', 'Londo');
    return this.http.get('http://api.weatherapi.com/v1/current.json', {params});
  }
}
