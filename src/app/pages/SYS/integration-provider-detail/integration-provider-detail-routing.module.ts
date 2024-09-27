import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationProviderDetailPage } from './integration-provider-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationProviderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationProviderDetailPageRoutingModule {}
