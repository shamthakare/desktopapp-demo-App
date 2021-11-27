import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // environment.base_URL ==  this is for url
  constructor(private http: HttpClient) { }
 
  getData(): Observable<any> {
    return this.http.get(environment.base_URL);
  }
  getDataWithAvtar() : Observable<any> {
    return this.http.get(environment.base_URL_REQ);
  }

}
