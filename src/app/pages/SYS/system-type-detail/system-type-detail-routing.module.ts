import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemTypeDetailPage } from './system-type-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SystemTypeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemTypeDetailPageRoutingModule {}
