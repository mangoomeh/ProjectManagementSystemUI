import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmsRoutingModule } from './pms-routing.module';
import { PmsComponent } from './pms.component';


@NgModule({
  declarations: [
    PmsComponent
  ],
  imports: [
    CommonModule,
    PmsRoutingModule
  ]
})
export class PmsModule { }
