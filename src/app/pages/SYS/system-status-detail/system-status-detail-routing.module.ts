import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemStatusDetailPage } from './system-status-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SystemStatusDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemStatusDetailPageRoutingModule {}
