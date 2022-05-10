import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/enums/api-paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public login(loginDto: any) {
    const url = `${this.baseUrl}${ApiPaths.Login}`;
    return this.httpClient.post<any>(url, loginDto);
  }

  public signup(signupDto: any) {
    const url = `${this.baseUrl}${ApiPaths.User}`;
    return this.httpClient.post<any>(url, signupDto);
  }
}
