import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmsRoutingModule } from './pms-routing.module';
import { PmsComponent } from './pms.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [
    PmsComponent,
    ProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    PmsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PmsModule { }
