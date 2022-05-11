import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  isManager: boolean = false;
  projectDetails: any;
  employeeList: any[] = [];
  projectId: number = 0;

  constructor(
    private auth: AuthService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isManager = this.auth.isManager();
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
    const confirmDelete = confirm(
      'Are you sure you want to delete this project? This cannot be undone.'
    );
    if (!confirmDelete) {
      return;
    }
    this.projectService.deleteProject(this.projectId).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['pms']);
      },
    });
  }

  setProjectStatusToCompleted() {
    const confirmCompleted = confirm(
      'Are you sure project is completed? This cannot be undone.'
    );
    if (!confirmCompleted) {
      return;
    }
    this.projectService.setProjectStatusToCompleted(this.projectId).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['pms']);
      },
    });
  }
}
