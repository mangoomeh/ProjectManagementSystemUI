import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: any;
  employeeList: any[] = [];
  projectId: number = 0;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = Number(params.get('id'));
      this.projectId = projectId;
      this.getProjectDetails(projectId);
    });
  }

  getProjectDetails(projectId: number) {
    this.projectService.getProjectMembersTasks(projectId).subscribe({
      next: (res) => {
        console.log(res);
        this.projectDetails = res;
      },
    });
  }

  addMemberToProject(userId: number) {
    const userProjectDto = {
      userId,
      projectId: this.projectDetails.id,
    };
    this.projectService.addUserToProject(userProjectDto).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  parseDate(date: any) {
    return new Date(date).toLocaleDateString();
  }

  getEmployees() {
    this.userService.getAllEmployees().subscribe({
      next: (res) => {
        console.log(res);
        this.employeeList = res;
      },
    });
  }

  removeMemberFromProject(userId: number) {
    const userProjectDto = {
      userId,
      projectId: this.projectDetails.id,
    };
    this.projectService.removeUserFromProject(userProjectDto).subscribe({
      next: (res) => {
        console.log(res);
        this.getProjectDetails(this.projectId);
      },
    });
  }

  deleteProject() {
    this.projectService.deleteProject(this.projectId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  setProjectStatusToCompleted() {
    this.projectService.setProjectStatusToCompleted(this.projectId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
