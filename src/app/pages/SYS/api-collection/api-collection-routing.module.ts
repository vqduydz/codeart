import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiCollectionPage } from './api-collection.page';

const routes: Routes = [
  {
    path: '',
    component: ApiCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiCollectionPageRoutingModule {}
