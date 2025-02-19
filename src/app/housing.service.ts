import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
 
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {
    

  }

  //Petición POST para crear una casa
  postHousing(housing: HousingLocation) {

    return this.http.post<HousingLocation>(this.url, housing);

  }

  getCasas() {

    return this.http.get<HousingLocation[]>(this.url); //ESTO DEVUELVE UN OBSERVABLE Y HAY QUE MANEJARLO

  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  

  

}
