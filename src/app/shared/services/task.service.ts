import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/enums/api-paths';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseApiUrl = environment.baseUrl + ApiPaths.Task;
  constructor(private http: HttpClient) {}
  
  addTaskToProject(taskDto: any) {
    const url = `${this.baseApiUrl}`;
    return this.http.post<any>(url, taskDto);
  }

  deleteTask(taskId: number) {
    const url = `${this.baseApiUrl}/${taskId}`
    return this.http.delete<any>(url);
  }
}
