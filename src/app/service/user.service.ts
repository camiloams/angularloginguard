import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl = 'api/user';

  constructor(private http: HttpClient) {


   }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl).pipe();

  }
}
