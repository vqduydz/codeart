import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationProviderPage } from './integration-provider.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationProviderPageRoutingModule {}
