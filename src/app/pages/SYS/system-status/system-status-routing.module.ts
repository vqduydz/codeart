import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemStatusPage } from './system-status.page';

const routes: Routes = [
  {
    path: '',
    component: SystemStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemStatusPageRoutingModule {}
