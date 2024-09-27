import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationTriggerActionModalPage } from './integration-trigger-action-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationTriggerActionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationTriggerActionModalPageRoutingModule {}
