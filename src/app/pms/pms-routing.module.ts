import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsComponent } from './pms.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: PmsComponent,
    children: [
      { path: '', component: ProjectsComponent, pathMatch: 'full' },
      { path: 'project/:id', component: ProjectDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmsRoutingModule {}
