import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmsRoutingModule } from './pms-routing.module';
import { PmsComponent } from './pms.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    PmsComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PmsRoutingModule
  ]
})
export class PmsModule { }
