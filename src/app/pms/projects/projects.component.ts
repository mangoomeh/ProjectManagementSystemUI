import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  user: any;
  userId: number = this.auth.getUserId();
  ongoingProjects: any;
  completedProjects: any;
  newProjectForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
  });

  constructor(
    private projectService: ProjectService,
    private auth: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getOngoingProjects();
    this.getCompletedProjects();
  }

  getOngoingProjects() {
    this.projectService.getOngoingProjects(this.userId).subscribe({
      next: (res) => {
        console.log('ongoing projects', res);
        this.ongoingProjects = res;
      },
    });
  }

  getCompletedProjects() {
    this.projectService.getCompletedProjects(this.userId).subscribe({
      next: (res) => {
        console.log('completed projects', res);
        this.completedProjects = res;
      },
    });
  }

  getUser() {
    const userId = this.auth.getUserId();
    this.userService.getUserById(userId).subscribe({
      next: (res) => {
        console.log('user', res);
        this.user = res;
      },
    });
  }

  createProject() {
    const userId = this.auth.getUserId();
    this.projectService.createProject(userId, this.newProjectForm.value).subscribe({
      next: (res) => {
        console.log('new project', res);
        document.getElementById("closeNewProjectModal")?.click();
        this.getOngoingProjects();
      },
    });
  }

  parseDateTimeString(date: any) {
    const d = new Date(date);
    const dateString =  `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    return dateString;
  }
}
