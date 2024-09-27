import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemaDetailPage } from './schema-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SchemaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemaDetailPageRoutingModule {}
