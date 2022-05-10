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

  getOngoingProjects(id: number) {
    const url = `${this.baseUrl}${ApiPaths.UserProject}/ongoing/user/${id}`;
    return this.http.get<any>(url);
  }

  getCompletedProjects(id: number) {
    const url = `${this.baseUrl}${ApiPaths.UserProject}/completed/user/${id}`;
    return this.http.get<any>(url);
  }
}
