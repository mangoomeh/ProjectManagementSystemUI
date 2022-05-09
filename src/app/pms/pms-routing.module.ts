import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmsComponent } from './pms.component';

const routes: Routes = [{ path: '', component: PmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmsRoutingModule {}
