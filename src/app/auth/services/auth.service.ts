import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  // register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
  //   const url = environment.apiUrl + '/users';

  //   return this.http
  //     .post<AuthResponseInterface>(url, data)
  //     .pipe(map(this.getUser));
  // }

  login(user: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/developers/auth';
    return this.http.post<CurrentUserInterface>(url, user);
  }
}
