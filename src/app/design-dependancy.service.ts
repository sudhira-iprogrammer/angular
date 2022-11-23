import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DesignDependancyService {

  constructor(private _http:HttpClient) { }

  customers():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  getCust(id:any){
    return this._http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
}
