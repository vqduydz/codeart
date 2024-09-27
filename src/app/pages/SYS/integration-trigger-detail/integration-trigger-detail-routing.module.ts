import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationTriggerDetailPage } from './integration-trigger-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationTriggerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationTriggerDetailPageRoutingModule {}
