import { Injectable, Inject }    from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

class promise {};

@Injectable() 
export class DataService {
  host: string = 'https://api.theline.digital/blockchain/';
  
  constructor(private http: HttpClient) {}

  authorizeAddress(address) : Observable<promise> { 
    return this.http.get(this.host+'permission/'+address);
  } 

  getPassport(address): Observable<promise> { 
    return this.http.get(this.host+'passport/'+address);
  } 

  // publishPassport(data) : Observable<promise> {
  //   return this.http.post(
  //     this.host+'publish',
  //     data
  //   );
  // }


}
