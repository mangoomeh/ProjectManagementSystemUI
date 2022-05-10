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

  public getRoles() {
    const url = `${this.baseUrl}${ApiPaths.Role}`;
    return this.httpClient.get<any>(url);
  }

  public getDecodedJwt() {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = token.split('.')[1].toString();
      return JSON.parse(window.atob(payload));
    }
  }

  public getUserRole() {
    return this.getDecodedJwt()?.Role;
  }

  public getUserId() {
    return parseInt(this.getDecodedJwt()?.UserId);
  }
}
