import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationActionDetailPage } from './integration-action-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationActionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationActionDetailPageRoutingModule {}
