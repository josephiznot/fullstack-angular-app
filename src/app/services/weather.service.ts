import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  lat: number;
  lng: number;
  weather: string;
  baseUrl: string = "https://api.darksky.net/forecast";

  getWeather = () => {};
}
