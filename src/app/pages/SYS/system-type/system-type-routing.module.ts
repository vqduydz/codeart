import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemTypePage } from './system-type.page';

const routes: Routes = [
  {
    path: '',
    component: SystemTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemTypePageRoutingModule {}
