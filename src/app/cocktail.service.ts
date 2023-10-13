import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailDetails(type: string) {
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + type;
    return this.http.get<any>(url)
  }
}
