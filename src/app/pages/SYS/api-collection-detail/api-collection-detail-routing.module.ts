import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiCollectionDetailPage } from './api-collection-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ApiCollectionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiCollectionDetailPageRoutingModule {}
