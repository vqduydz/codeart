import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationActionPage } from './integration-action.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationActionPageRoutingModule {}
