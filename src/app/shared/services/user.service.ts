import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    const url = `${this.baseUrl}${ApiPaths.User}`;
    return this.http.get<any>(url);
  }

  getUserById(id: number) {
    const url = `${this.baseUrl}${ApiPaths.User}/${id}`;
    return this.http.get<any>(url);
  }

  getUsersNotInThisProject(projectId: number) {
    const url = `${this.baseUrl}${ApiPaths.User}/not-in-project/${projectId}`;
    return this.http.get<any>(url);
  }
}
