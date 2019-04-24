import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MobileDataService {

  constructor(private http: HttpClient) { }
 
  //Creating Method to Fetch Mobile Details from JSON file...
  getMobileDetails()
  {
    return this.http.get('assets/mobile.json');
  }
}
