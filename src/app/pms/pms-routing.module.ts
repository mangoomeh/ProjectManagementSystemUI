import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsComponent } from './pms.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: PmsComponent,
    children: [
      { path: '', component: ProjectsComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmsRoutingModule {}
