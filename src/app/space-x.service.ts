import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  BASEURI = 'https://api.spaceXdata.com/v3/'

  constructor(private http: HttpClient) { }

  getSpaceXData(limit): Observable<any> {
    return this.http.get(this.BASEURI + `launches?limit=${limit}`);
  }

}
