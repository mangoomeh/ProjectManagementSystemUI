import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getOngoingProjects(userId: number) {
    const url = `${this.baseUrl}${ApiPaths.Project}/ongoing/user/${userId}`;
    return this.http.get<any>(url);
  }

  getCompletedProjects(userId: number) {
    const url = `${this.baseUrl}${ApiPaths.Project}/completed/user/${userId}`;
    return this.http.get<any>(url);
  }

  createProject(userId: number, projectDto: any) {
    const url = `${this.baseUrl}${ApiPaths.Project}/${userId}`;
    return this.http.post<any>(url, projectDto);
  }
}
