import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: RegisterRequestInterface): Observable<{}> {
    const url = environment.apiUrl + '/developers';
    return this.http.post<{}>(url, data);
  }

  login(user: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/developers/auth';
    return this.http.post<CurrentUserInterface>(url, user);
  }
}
