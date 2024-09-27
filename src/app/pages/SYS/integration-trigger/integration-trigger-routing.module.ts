import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationTriggerPage } from './integration-trigger.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationTriggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationTriggerPageRoutingModule {}
