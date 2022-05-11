import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: any;
  employeeList: any[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = Number(params.get('id'));
      this.getProjectMembersTasks(projectId);
    });
  }

  getProjectMembersTasks(projectId: number) {
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

  getEmployees() {}

}
