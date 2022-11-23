import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  constructor(private http: HttpClient) {}

  messageAlert() {
    alert('Welcome Sudhir');
  }

  users(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // userName=new Subject<any>();
  userName=new BehaviorSubject('sudhir');
}
